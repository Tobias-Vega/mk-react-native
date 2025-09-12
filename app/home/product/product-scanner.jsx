import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

export default function ProductScanner({ onScanned }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text>No hay permiso para usar la cámara</Text>
        <Button title="Dar permiso" onPress={requestPermission} />
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    Alert.alert("Escaneo exitoso", `Código detectado: ${data}`);
    onScanned(data);
  };

  return (
    <View style={styles.scanner}>
      <CameraView
        style={{ flex: 1 }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && (
        <Button title="Escanear de nuevo" onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  scanner: { flex: 1, marginVertical: 20 },
});
