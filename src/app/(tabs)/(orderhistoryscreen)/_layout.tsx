import { Stack } from 'expo-router';

export default function OrderHistoryScreenLayout() {

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}

      />
    </Stack>
  );
}
