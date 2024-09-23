import { StyleSheet } from "react-native";
import { BORDERRADIUS,SPACING,FONTSIZE,COLORS } from "@/src/Utils/theme/theme";
export const styles = StyleSheet.create({
    HeaderContainer: {
      padding: SPACING.space_30,
      top: SPACING.space_12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    HeaderText: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: FONTSIZE.size_20,
      color: COLORS.primaryWhiteHex,
    },
  });