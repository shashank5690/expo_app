import { useFonts } from "expo-font";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export const useAppFonts = () => {
  const [fontsLoaded] = useFonts({
    Poppins: Poppins_500Medium,
    Poppins_600SemiBold: Poppins_600SemiBold,
  });

  return fontsLoaded;
};
