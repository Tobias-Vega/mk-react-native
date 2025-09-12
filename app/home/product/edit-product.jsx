
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useProducts } from "./ProductContext";


export default function EditProduct() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { products, updateProduct } = useProducts();

  const product = products.find((p) => p.id.toString() === id);
  const [name, setName] = useState(product?.name || "");
  const [code, setCode] = useState(product?.code || "");

  const handleUpdateProduct = () => {
    if (!name || !code) {
      Alert.alert("Error", "Debes completar todos los campos");
      return;
    }
    updateProduct(product.id, { name, code });
    Alert.alert("Éxito", `Producto actualizado: ${name} (${code})`);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>Editar Producto</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={code} onChangeText={setCode} />
      <Button title="Guardar cambios" onPress={handleUpdateProduct} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
});
