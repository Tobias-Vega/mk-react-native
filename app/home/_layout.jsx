import { Tabs } from 'expo-router';
import { CharacterProvider } from '../context/Character-context';

export default function RootLayout() {
  return (
    <CharacterProvider>
      <Tabs>
        <Tabs.Screen name="historia" options={{ title: 'Historia' }} />
        <Tabs.Screen name="personajes" options={{ title: 'Personajes' }} />
        <Tabs.Screen name="escenarios" options={{ title: 'Escenarios' }} />
        <Tabs.Screen name='crear personajes' options={{ title: 'Crear personajes' }} />
      </Tabs>
    </CharacterProvider>
  );
}
