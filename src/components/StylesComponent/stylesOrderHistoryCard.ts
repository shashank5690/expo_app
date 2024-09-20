import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/src/Utils/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    CardContainer: {
      gap: SPACING.space_10,
    },
    CardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: SPACING.space_20,
      alignItems: 'center',
    },
    HeaderTitle: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    HeaderSubtitle: {
      fontFamily: 'Poppins_300Light',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    PriceContainer: {
      alignItems: 'flex-end',
    },
    HeaderPrice: {
      fontFamily: 'Poppins_500Medium',
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryOrangeHex,
    },
    ListContainer: {
      gap: SPACING.space_20,
    },
  });