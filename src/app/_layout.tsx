import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
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
      {/* Tab Navigation */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="(carddetails)/details" 
        options={{ headerShown: false, title: "Card Details" }} 
      />

      <Stack.Screen 
        name="(payments)/payments" 
        options={{ headerShown: false, title: "Payments" }} 
      />
    </Stack>
  );
};
