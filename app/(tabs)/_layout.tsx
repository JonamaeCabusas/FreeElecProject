// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0a0d14' }, // Dark background
        headerTintColor: '#ffffff',                 // Back arrow & title text color
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'BSIT 4C Group 4',
        }}
      />
    </Stack>
  );
}