import { useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const irAlLogin = () => {
    router.push('/auth/login');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/extras/logo-mk.jpeg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Mortal Kombat</Text>
      <Text style={styles.subtitle}>¡Bienvenido al universo de combate!</Text>

      <View style={styles.buttonContainer}>
        <Button title="Ir al Login" onPress={irAlLogin} color="#FFD700" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 200,
  },
  spacing: {
    height: 12,
  },
});
