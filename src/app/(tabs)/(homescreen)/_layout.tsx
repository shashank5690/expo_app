import { Stack } from 'expo-router';

export default function HomeScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="explore"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
