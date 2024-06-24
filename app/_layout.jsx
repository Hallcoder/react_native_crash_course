import React from 'react';
import { Stack } from 'expo-router';
import linking from './config/linking_config';

const RootLayout = () => {
  return (
      <Stack linking={linking}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="post-details/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
  );
};

export default RootLayout;
