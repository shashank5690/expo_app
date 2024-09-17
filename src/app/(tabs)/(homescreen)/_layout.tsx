import { Stack } from 'expo-router';

export default function HomeScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
