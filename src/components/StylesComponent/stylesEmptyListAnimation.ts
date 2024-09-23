import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/src/Utils/theme/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    EmptyCartContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    LottieStyle: {
      height: 300,
    },
    LottieText: {
      fontFamily: 'Poppins_500Medium',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryOrangeHex,
      textAlign: 'center',
    },
  });
