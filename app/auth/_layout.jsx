import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="camera" options={{ headerShown: false }} />
      <Stack.Screen name="face-register" options={{ headerShown: false }} />
      <Stack.Screen name="face-login" options={{ headerShown: false }} />
    </Stack>
  );
}
