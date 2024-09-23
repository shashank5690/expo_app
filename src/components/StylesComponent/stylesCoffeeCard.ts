import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/src/Utils/theme/theme";
import { Dimensions, StyleSheet } from "react-native";

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

const styles = StyleSheet.create({
    CardLinearGradientContainer: {
      padding: SPACING.space_15,
      borderRadius: BORDERRADIUS.radius_25,
    },
    CardImageBG: {
      width: CARD_WIDTH,
      height: CARD_WIDTH,
      borderRadius: BORDERRADIUS.radius_20,
      marginBottom: SPACING.space_15,
      overflow: 'hidden',
    },
    CardRatingContainer: {
      flexDirection: 'row',
      backgroundColor: COLORS.primaryBlackRGBA,
      alignItems: 'center',
      justifyContent: 'center',
      gap: SPACING.space_10,
      paddingHorizontal: SPACING.space_15,
      position: 'absolute',
      borderBottomLeftRadius: BORDERRADIUS.radius_20,
      borderTopRightRadius: BORDERRADIUS.radius_20,
      top: 0,
      right: 0,
    },
    CardRatingText: {
      fontFamily: 'Poppins_500Medium',
      color: COLORS.primaryWhiteHex,
      lineHeight: 22,
      fontSize: FONTSIZE.size_14,
    },
    CardTitle: {
      fontFamily: 'Poppins_500Medium',
      color: COLORS.primaryWhiteHex,
      fontSize: FONTSIZE.size_16,
    },
    CardSubtitle: {
      fontFamily: 'Poppins_300Light',
      color: COLORS.primaryWhiteHex,
      fontSize: FONTSIZE.size_10,
    },
    CardFooterRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: SPACING.space_15,
    },
    CardPriceCurrency: {
      fontFamily: 'Poppins_500Medium',
      color: COLORS.primaryOrangeHex,
      fontSize: FONTSIZE.size_18,
      paddingRight:SPACING.space_10,
    },
    CardPrice: {
      color: COLORS.primaryWhiteHex,
    },
  });

  export default styles;