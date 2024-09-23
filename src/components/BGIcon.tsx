import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, SPACING} from '../Utils/theme/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BGIconProps } from '../Utils/types/types';
import { styles } from './StylesComponent/stylesBGIcon';
const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGColor}) => {
  return (
    <View style={[styles.IconBG, {backgroundColor: BGColor}]}>
      <MaterialIcons
           name={name} color={color} size={size} 
          />
    </View>
  );
};


export default BGIcon;