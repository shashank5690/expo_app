import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* Root Navigation */}
        <RootNavigation />

        {/* StatusBar configuration */}
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const RootNavigation = () => {
  return (
    <Stack>
      {/* Stack screen for tab navigation, hides header */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* You can add additional Stack.Screen components here if needed, such as modals or other screens */}
      {/* Example for a modal or extra screen:
      <Stack.Screen name="exampleModal" options={{ presentation: 'modal' }} />
      */}
    </Stack>
  );
};
