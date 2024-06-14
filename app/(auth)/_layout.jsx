import React from "react";
import { Stack } from "expo-router";

const AuthLayout = ({ children }) => {
  return (
        <Stack>
            <Stack.Screen name="login" options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="signup" options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="forgot-password" options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="initiate-reset" options={{headerShown:false}}></Stack.Screen>
        </Stack>
      
  );
};
export default AuthLayout;
