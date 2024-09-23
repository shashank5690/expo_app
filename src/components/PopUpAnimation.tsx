import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {COLORS} from '../Utils/theme/theme';
import { PopUpAnimationProps } from '../Utils/types/types';
import { styles } from './StylesComponent/stylesPopUpAnimation';
const PopUpAnimation: React.FC<PopUpAnimationProps> = ({style, source}) => {
  return (
    <View style={styles.LottieAnimationContainer}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};



export default PopUpAnimation;