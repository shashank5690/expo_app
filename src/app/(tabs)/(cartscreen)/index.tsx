import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
// import { Poppins_500Medium } from '@expo-google-fonts/poppins'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function CartScreen() {

  // const [fontsLoaded] = useFonts({
  //   "Poppins": Poppins_500Medium,
  // });
  
  return (
    <View style={styles.container}>
      <Ionicons name="heart-circle" size={32} color="green" />
      <Text style={styles.text}>Cart Screen</Text>
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
    // fontFamily: 'Poppins',
    top: 350
  },
});
