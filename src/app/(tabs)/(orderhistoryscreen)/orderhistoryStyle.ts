import { StyleSheet } from "react-native";
import { BORDERRADIUS,COLORS,FONTSIZE,SPACING } from "@/src/Utils/theme/theme";
export const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
      },
      LottieAnimation: {
        height: 250,
      },
      ScrollViewFlex: {
        flexGrow: 1,
      },
      ScrollViewInnerView: {
        flex: 1,
        justifyContent: 'space-between',
      },
      ItemContainer: {
        flex: 1,
      },
      ListItemContainer: {
        paddingHorizontal: SPACING.space_20,
        gap: SPACING.space_30,
      },
      DownloadButton: {
        margin: SPACING.space_20,
        backgroundColor: COLORS.primaryOrangeHex,
        alignItems: 'center',
        justifyContent: 'center',
        height: SPACING.space_36 * 2,
        borderRadius: BORDERRADIUS.radius_20,
      },
      ButtonText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex,
      },
});
