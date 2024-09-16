import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';  

export default function TabsLayout() {
  return (
    <Tabs>
      {/* Define the first tab: Home (index) */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      
      {/* Define the second tab: Explore */}
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

