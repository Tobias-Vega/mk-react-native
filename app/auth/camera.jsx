import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Se necesita autorizar el permiso para el uso de la cámara</Text>
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    router.replace("/home/history");
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Cambiar Cámara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.text}>Tomar Foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  message: { textAlign: "center", paddingBottom: 10 },
  camera: { flex: 1 },
  buttonContainer: {
    position: "absolute",
    bottom: 64,
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
    paddingHorizontal: 32,
  },
  button: { flex: 1, alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold", color: "white" },
});
