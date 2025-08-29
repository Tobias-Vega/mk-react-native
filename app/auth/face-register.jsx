import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function FaceRegisterScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState('front');
  const [cuil, setCuil] = useState('');
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef(null);
  const router = useRouter();

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Se necesita autorizar el permiso para el uso de la cámara</Text>
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const handleRegister = async () => {
    if (!cuil.trim()) {
      Alert.alert('Debes ingresar tu CUIL');
      return;
    }
    if (!cameraRef.current) return;
    setLoading(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({ base64: false });
      const formData = new FormData();
      formData.append('cuil', cuil);
      formData.append('image', {
        uri: photo.uri,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
      const res = await fetch('https://52ve8mm1q0ra.share.zrok.io/register', {
        method: 'POST',
        headers: {
          'skip_zrok_interstitial': 'true',
        },
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        await AsyncStorage.setItem('face_registered', 'true');
        Alert.alert('Registro exitoso', 'Tu rostro ha sido registrado correctamente.');
        router.replace('/auth/login');
      } else {
        Alert.alert('Error', data?.message || 'No se pudo registrar el rostro.');
      }
    } catch (e) {
      Alert.alert('Error de red', 'No se pudo conectar al servicio.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="CUIL"
          placeholderTextColor="#888"
          value={cuil}
          onChangeText={setCuil}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing} disabled={loading}>
          <Text style={styles.text}>Cambiar Cámara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
          <Text style={styles.text}>Registrar rostro</Text>
        </TouchableOpacity>
      </View>
      {loading && <ActivityIndicator size="large" color="#FFD700" style={styles.loading} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  message: { textAlign: 'center', paddingBottom: 10 },
  camera: { flex: 1 },
  inputContainer: {
    position: 'absolute',
    top: 64,
    width: '100%',
    paddingHorizontal: 32,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 32,
  },
  button: { flex: 1, alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  loading: { position: 'absolute', alignSelf: 'center', top: '50%' },
});
