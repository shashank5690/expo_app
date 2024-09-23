import { StyleSheet } from "react-native";
import { COLORS } from "@/src/Utils/theme/theme";
export const styles = StyleSheet.create({
    LottieAnimationContainer: {
      flex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: COLORS.secondaryBlackRGBA,
      justifyContent: 'center',
    },
  });