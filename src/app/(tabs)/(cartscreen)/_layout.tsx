import { Stack } from 'expo-router';

export default function CartScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}

      />
    </Stack>
  );
}
