import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: 'red' }, headerShown: false }}>
      <Tabs.Screen name="login" options={{ title: 'Iniciar Sesión' }} />
    </Tabs>
  );
}
