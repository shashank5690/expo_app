// app/(tabs)/homescreen/index.tsx (or wherever ExploreScreen is defined)
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_500Medium,
  });

  const router = useRouter();

  const handleCardDetailNavigation = () => {
    router.push('/(carddetails)/details');  
  };

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
      <TouchableOpacity 
        style={styles.button}
        onPress={handleCardDetailNavigation}
      >
        <Text style={styles.buttonText}>Go to Card Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#1E90FF", 
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: 16,
  },
});
