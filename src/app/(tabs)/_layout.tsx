import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';  
import Octicons from '@expo/vector-icons/Octicons';

export default function TabsLayout() {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen
        name="(homescreen)"
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      
      {/* Cart Tab */}
      <Tabs.Screen
        name="(cartscreen)"
        options={{
          tabBarLabel: 'Cart',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
        }}
      />

   <Tabs.Screen
        name="(favoritesscreen)"
        options={{
          tabBarLabel: 'Favorites',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />

<Tabs.Screen
        name="(orderhistoryscreen)"
        options={{
          tabBarLabel: 'Order History',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="bell" size={24}  />
          ),
        }}
      />
    </Tabs>
  );
}
