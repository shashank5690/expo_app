import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_300Light,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";


export default function RootLayout() {
 const[fontsLoaded]=useFonts({
    Poppins_600SemiBold: Poppins_600SemiBold,
    Poppins_500Medium: Poppins_500Medium,
    Poppins_300Light: Poppins_300Light,
    Poppins_400Regular: Poppins_400Regular,
  });

  if(!fontsLoaded){
    return console.log("No fonts");
  }

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
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
