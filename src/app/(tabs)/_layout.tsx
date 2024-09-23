import { Tabs } from 'expo-router';
import { Ionicons, FontAwesome6, Entypo } from '@expo/vector-icons';  
import { StyleSheet } from 'react-native';
import { COLORS } from '../../Utils/theme/theme';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarBackground: () =>  (
        <BlurView intensity={15} tint="dark" style={styles.blurContainer} />
      )
    }}
    >
      <Tabs.Screen
        name="(homescreen)"
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo
            name="home" 
            color={
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
            size={28} />
          ),
        }}
      />

      <Tabs.Screen
        name="(cartscreen)"
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome6 
            name="cart-shopping" 
            color={
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            } 
            size={25} />
          ),
        }}
      />

   <Tabs.Screen
        name="(favoritesscreen)"
        options={{
          tabBarLabel: 'Favorites',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
            name="heart" 
            color={
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
            size={28} />
          ),
        }}
      />

<Tabs.Screen
        name="(orderhistoryscreen)"
        options={{
          tabBarLabel: 'Order History',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Entypo 
            name="bell" 
            color={
              focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
            }
            size={25} 
             />
          ),
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
   // backgroundColor: 'transparent', 
  ...Platform.select({
   android:{
    backgroundColor:COLORS.primaryBlackHex,
   },
   ios:{
    backgroundColor:COLORS.primaryBlackRGBA
   }
  }),
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor : 'transparent',
  },
  blurContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  }
})