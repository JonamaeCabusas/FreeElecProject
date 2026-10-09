import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    // Bag-o nga ThemeProvider base sa dark/light mode setup
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Navigation screen para sa main dashboard tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* Navigation screen para sa Profile page with dark header styling */}
        <Stack.Screen
          name="profile"
          options={{
            title: 'Member Profile',
            headerStyle: { backgroundColor: '#0a0d14' },
            headerTintColor: '#ffffff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
