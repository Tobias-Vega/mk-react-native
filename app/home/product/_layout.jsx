
import { Stack } from "expo-router";
import { ProductProvider } from "./ProductContext";

export default function ProductLayout() {
  return (
    <ProductProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Productos" }} />
        <Stack.Screen name="create-product" options={{ title: "Agregar Producto" }} />
        <Stack.Screen name="edit-product" options={{ title: "Editar Producto" }} />
      </Stack>
    </ProductProvider>
  );
}
