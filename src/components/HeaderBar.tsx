import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE, SPACING } from "../Utils/theme/theme";
import ProfilePic from "./ProfilePic";
import GradientBGIcon from "./GradientBGIcon";
import { HeaderBarProps } from "../Utils/types/types";


const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon name={""} color={""} size={0} />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default HeaderBar;
