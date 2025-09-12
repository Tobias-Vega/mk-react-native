
import { useRouter } from "expo-router";
import { Alert, Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useProducts } from "./ProductContext";


export default function ProductsPage() {
  const router = useRouter();
  const { products, deleteProduct } = useProducts();

  const handleDelete = (id) => {
    deleteProduct(id);
    Alert.alert("Éxito", "Producto eliminado correctamente");
  };

  return (
    <View style={styles.container}>
      <Button title="Agregar Producto" onPress={() => router.push("/home/product/create-product")} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} (Código: {item.code})</Text>
            <Button title="Editar" onPress={() => router.push(`/home/product/edit-product?id=${item.id}`)} />
            <Button title="Eliminar" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { marginVertical: 10 },
});
