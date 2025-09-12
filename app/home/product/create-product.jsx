
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import ProductScanner from "./product-scanner";
import { useProducts } from "./ProductContext";


export default function CreateProduct() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();
  const { addProduct } = useProducts();

  const handleAddProduct = () => {
    if (!name || !code) {
      Alert.alert("Error", "Debes completar todos los campos");
      return;
    }
    addProduct({ name, code });
    Alert.alert("Éxito", `Producto agregado: ${name} (${code})`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Nombre del producto:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Gaseosa"
        value={name}
        onChangeText={setName}
      />

      <Text>Código:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 123456"
        value={code}
        onChangeText={setCode}
      />

      <ProductScanner onScanned={setCode} />

      <Button title="Guardar" onPress={handleAddProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
});
