import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';

const toastConfig = {
  success: ({ text1, text2 }: any) => (
    <View style={styles.toastContainer}>
      <Text style={styles.text1}>{text1}</Text>
      {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    height: 60,
    width: '60%',
    backgroundColor: '#252A32', 
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 15,
    padding: 10,
  },
  text1: {
    fontFamily:'Poppins_600SemiBold',
    color: '#D17842',
    fontSize: 16,
  },
  text2: {
    color: '#D17842',
    fontSize: 14,
  },
});

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
        />
      </Stack>

      <Toast config={toastConfig} />
    </>
  );
}
