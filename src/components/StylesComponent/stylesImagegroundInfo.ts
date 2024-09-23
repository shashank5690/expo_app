import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/src/Utils/theme/theme";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    ItemBackgroundImage: {
      width: "100%",
      aspectRatio: 20 / 25,
      justifyContent: "space-between",
    },
    ImageHeaderBarContainerWithBack: {
      padding: SPACING.space_30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      top: SPACING.space_20,
    },
    ImageHeaderBarContainerWithoutBack: {
      padding: SPACING.space_30,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    ImageInfoOuterContainer: {
      paddingVertical: SPACING.space_24,
      paddingHorizontal: SPACING.space_30,
      backgroundColor: COLORS.primaryBlackRGBA,
      borderTopLeftRadius: BORDERRADIUS.radius_20 * 2,
      borderTopRightRadius: BORDERRADIUS.radius_20 * 2,
    },
    ImageInfoInnerContainer: {
      justifyContent: "space-between",
      gap: SPACING.space_15,
    },
    IconContainer: {
      borderWidth: 2,
      borderColor: COLORS.secondaryDarkGreyHex,
      borderRadius: SPACING.space_12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.secondaryDarkGreyHex,
      overflow: "hidden",
      right: SPACING.space_15,
    },
    IconContainer2: {
      borderWidth: 2,
      borderColor: COLORS.secondaryDarkGreyHex,
      borderRadius: SPACING.space_12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.secondaryDarkGreyHex,
      overflow: "hidden",
      left: SPACING.space_15,
    },
    LinearGradientBG: {
      height: SPACING.space_36,
      width: SPACING.space_36,
      alignItems: "center",
      justifyContent: "center",
    },
    InfoContainerRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    ItemTitleText: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: FONTSIZE.size_24,
      color: COLORS.primaryWhiteHex,
    },
    ItemSubtitleText: {
      fontFamily: "Poppins_500Medium",
      fontSize: FONTSIZE.size_12,
      color: COLORS.primaryWhiteHex,
    },
    ItemPropertiesContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: SPACING.space_20,
    },
    ProperFirst: {
      height: 55,
      width: 55,
      borderRadius: BORDERRADIUS.radius_15,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.primaryBlackHex,
    },
    PropertyTextFirst: {
      fontFamily: "Poppins_500Medium",
      fontSize: FONTSIZE.size_10,
      color: COLORS.primaryWhiteHex,
    },
    PropertyTextLast: {
      fontFamily: "Poppins_500Medium",
      fontSize: FONTSIZE.size_12,
      color: COLORS.primaryWhiteHex,
      marginTop: SPACING.space_2 + SPACING.space_4,
    },
    RatingContainer: {
      flexDirection: "row",
      gap: SPACING.space_10,
      alignItems: "center",
    },
    RatingText: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: FONTSIZE.size_18,
      color: COLORS.primaryWhiteHex,
    },
    RatingCountText: {
      fontFamily: "Poppins_500Medium",
      fontSize: FONTSIZE.size_12,
      color: COLORS.primaryWhiteHex,
    },
    RoastedContainer: {
      height: 55,
      width: 55 * 2 + SPACING.space_20,
      borderRadius: BORDERRADIUS.radius_15,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.primaryBlackHex,
    },
    RoastedText: {
      fontFamily: "Poppins_500Medium",
      fontSize: FONTSIZE.size_10,
      color: COLORS.primaryWhiteHex,
    },
  });

  export default styles;