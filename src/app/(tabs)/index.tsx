import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_500Medium } from '@expo-google-fonts/poppins'

export default function HomeScreen() {

  const [fontsLoaded] = useFonts({
    "Poppins": Poppins_500Medium,
  });
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
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
  },
});
