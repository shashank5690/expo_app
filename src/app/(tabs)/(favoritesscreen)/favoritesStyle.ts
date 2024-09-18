import { COLORS, SPACING } from "@/src/Utils/theme/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    ScreenContainer: {
        flex: 1,
        backgroundColor: COLORS.primaryBlackHex,
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
        gap: SPACING.space_20,
      },
  });