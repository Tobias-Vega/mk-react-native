import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='historia' options={{ title: 'Historia' }} />
      <Tabs.Screen name='personajes' options={{ title: 'Personajes' }} />
      <Tabs.Screen name='escenarios' options={{ title: 'Escenarios' }} />
    </Tabs>
  );
}