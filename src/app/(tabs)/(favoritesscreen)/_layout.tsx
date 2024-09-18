import { Stack } from 'expo-router';

export default function FavoriteScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="favorites"
        options={{ headerShown: false }}

      />
    </Stack>
  );
}
