import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";

export default function ExploreScreen() {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_500Medium,
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0C0F14",
      }}
    >
      <Text style={{ color: "#fff", fontFamily: "Poppins", fontSize: 30 }}>
        Explore Screen
      </Text>
    </View>
  );
}
