import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Usuario y contraseña requeridos');
      return;
    }
    router.replace('/home/history');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/extras/logo-mk.jpeg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Bienvenido a Mortal Kombat</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Ingresar" onPress={handleLogin} color="#FFAC1C" />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#000' },
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
});