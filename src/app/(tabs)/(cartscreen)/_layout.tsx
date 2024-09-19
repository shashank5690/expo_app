import { Stack } from 'expo-router';

export default function CartScreenLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="cart"
        options={{ headerShown: false }}

      />
    </Stack>
  );
}
