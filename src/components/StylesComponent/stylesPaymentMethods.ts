import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/src/Utils/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    PaymentCardContainer: {
      borderRadius: BORDERRADIUS.radius_15 * 2,
      backgroundColor: COLORS.primaryGreyHex,
      borderWidth: 3,
    },
    LinearGradientWallet: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: SPACING.space_12,
      paddingHorizontal: SPACING.space_24,
      gap: SPACING.space_24,
      borderRadius: BORDERRADIUS.radius_15 * 2,
    },
    WalletRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: SPACING.space_24,
    },
    LinearGradientRegular: {
      flexDirection: "row",
      alignItems: "center",
      padding: SPACING.space_12,
      paddingHorizontal: SPACING.space_24,
      gap: SPACING.space_24,
      borderRadius: BORDERRADIUS.radius_15 * 2,
    },
    PaymentTitle: {
      fontFamily: 'Poppins_600SemiBold',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryWhiteHex,
    },
    PaymentPrice: {
      fontFamily: 'Poppins_500Medium',
      fontSize: FONTSIZE.size_18,
      color: COLORS.secondaryLightGreyHex,
    },
    PaymentImage: {
      height: SPACING.space_30,
      width: SPACING.space_30,
    },
  });