import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE, SPACING } from "../Utils/theme/theme";
import ProfilePic from "./ProfilePic";
import GradientBGIcon from "./GradientBGIcon";
import { HeaderBarProps } from "../Utils/types/types";
import { styles } from "./StylesComponent/stylesHeaderBar";

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon name={""} color={""} size={0} />
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};



export default HeaderBar;
