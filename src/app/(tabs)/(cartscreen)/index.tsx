import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppFonts } from "../../../Utils/fonts";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useStore } from "../../../store/store";

export default function CartScreen() {

  const CartList = useStore((state: any) => state.CartList);
  console.log("CartList:", CartList.length);
  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
    fontFamily: 'Poppins',
    top: 350
  },
});
