import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/src/Utils/theme/theme";
import { StyleSheet } from "react-native";

export 
const styles = StyleSheet.create({
  PriceFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.space_20,
    padding: SPACING.space_20,
  },
  PriceContainer: {
    alignItems: "center",
    width: 100,
  },
  PriceTitle: {
    fontFamily: 'Poppins_500Medium',
    fontSize: FONTSIZE.size_14,
    color: COLORS.secondaryLightGreyHex,
  },
  PriceText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: FONTSIZE.size_24,
    color: COLORS.primaryOrangeHex,
  },
  Price: {
    color: COLORS.primaryWhiteHex,
  },
  PayButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },
  ButtonText: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});