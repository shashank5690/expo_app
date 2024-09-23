import { StyleSheet } from "react-native";
import { BORDERRADIUS,SPACING,FONTSIZE,COLORS } from "@/src/Utils/theme/theme";
export const styles = StyleSheet.create({
    CardContainer: {
      borderRadius: BORDERRADIUS.radius_25,
      overflow: 'hidden',
    },
    ContainerLinearGradient: {
      gap: SPACING.space_10,
      padding: SPACING.space_20,
    },
    DescriptionTitle: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.secondaryLightGreyHex,
    },
    DescriptionText: {
      fontFamily: 'Poppins_400Regular',
      fontSize: FONTSIZE.size_14,
      color: COLORS.primaryWhiteHex,
    },
  });