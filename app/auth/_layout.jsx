import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="login" options={{ title: 'Iniciar Sesión' }} />
    </Tabs>
  );
}
