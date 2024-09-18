import React from 'react'
import { View } from 'react-native'
import { StyleSheet,Text } from 'react-native'
import LottieView from 'lottie-react-native'
import { COLORS,FONTSIZE } from '../Utils/theme/theme'

interface EmptyListAnimationProps{
    title:string;
}

const EmptyListAnimation: React.FC<EmptyListAnimationProps> =  ({title}) => {
  return (
    <View style={styles.EmptyCartContainer}>
    <LottieView
      style={styles.LottieStyle}
      source={require('../Utils/lottie/coffeecup.json')}
      autoPlay
      loop
    />
    <Text style={styles.LottieText}>{title}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    EmptyCartContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    LottieStyle: {
      height: 300,
    },
    LottieText: {
      fontFamily: 'Poppins_500Medium',
      fontSize: FONTSIZE.size_16,
      color: COLORS.primaryOrangeHex,
      textAlign: 'center',
    },
  });

export default EmptyListAnimation
