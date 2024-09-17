import React from 'react';

import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { COLORS, FONTSIZE, SPACING } from '../Utils/theme/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


interface GradientBGIconProps {
  name: string;
  color: string;
  size: number;
}


const GradientBGIcon: React.FC<GradientBGIconProps> = ({ name, color, size }) => {
  return (
    <View style={styles.container}>
       <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientBG}
      >
      <MaterialCommunityIcons
        name="vector-square"
        color={COLORS.primaryLightGreyHex}
        size={FONTSIZE.size_18}
      />
            </LinearGradient>

    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        borderWidth: 2,
        borderColor: COLORS.secondaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.secondaryDarkGreyHex,
        overflow: 'hidden',
      },
      linearGradientBG: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default GradientBGIcon;