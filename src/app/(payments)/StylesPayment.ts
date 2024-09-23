import {
  BORDERRADIUS,
  COLORS,
  FONTSIZE,
  SPACING,
} from "@/src/Utils/theme/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  LottieAnimation: {
    flex: 1,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  IconContainer: {
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    borderRadius: SPACING.space_12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: "hidden",
  },
  LinearGradientBG: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    alignItems: "center",
    justifyContent: "center",
  },
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    fontFamily: "Poppins_500Medium",
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  EmptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  PaymentOptionsContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_15,
    bottom: SPACING.space_24,
  },
  CreditCardContainer: {
    padding: SPACING.space_10,
    gap: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_15 * 2,
    borderWidth: 3,
    bottom: SPACING.space_24,
  },
  CreditCardTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_10,
  },
  CreditCardBG: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: BORDERRADIUS.radius_25,
  },
  LinearGradientStyle: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_36,
    paddingHorizontal: SPACING.space_15,
    paddingVertical: SPACING.space_10,
  },
  CreditCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CreditCardNumberContainer: {
    flexDirection: "row",
    gap: SPACING.space_10,
    alignItems: "center",
  },
  CreditCardNumber: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
    letterSpacing: SPACING.space_4 + SPACING.space_2,
  },
  CreditCardNameSubitle: {
    fontFamily: "Poppins_500Medium",
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CreditCardNameTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CreditCardNameContainer: {
    alignItems: "flex-start",
  },
  CreditCardDateContainer: {
    alignItems: "flex-end",
  },
});

export default styles;
