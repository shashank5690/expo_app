import React from 'react';
import { styles } from './StylesComponent/stylesGradientBGIcon';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { COLORS, FONTSIZE, SPACING } from '../Utils/theme/theme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GradientBGIconProps } from '../Utils/types/types';


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



export default GradientBGIcon;