import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/src/Utils/theme/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    ImageContainer: {
      height: SPACING.space_40,
      width: SPACING.space_40,
      borderRadius: SPACING.space_12,
      borderWidth: 2,
      borderColor: COLORS.secondaryDarkGreyHex,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    Image: {
      height: SPACING.space_36,
      width: SPACING.space_36,
    },
  });