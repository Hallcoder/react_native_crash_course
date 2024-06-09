import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="home" options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="restaurant-list" options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="(auth)" options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}></Stack.Screen>
    </Stack>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RootLayout;