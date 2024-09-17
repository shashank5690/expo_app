import { Stack } from 'expo-router';

export default function HomeScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="homescreen"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
