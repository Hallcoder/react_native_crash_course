import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputWithIcon from "../components/inputWithIcon";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPressIn = () => {
    console.log("Press In");
  };

  const onPressOut = () => {
    console.log("Press Out");
  };

  const onPress = () => {
    alert("Pressable Button pressed!");
  };
  return (
    <SafeAreaView>
      <View className="relative bg-orange-400 h-screen">
        <View className="bg-white h-[80vh] mt-[20vh] sticky rounded-t-3xl flex-col items-center">
          <View className="flex-row justify-center mt-8">
            <Text className="text-6xl font-extrabold">Supa</Text>
            <Text className="text-6xl text-orange-400 font-extrabold">
              Menu
            </Text>
          </View>
          <Text className="font-semibold my-4">Welcome...</Text>
          <Text className="text-gray-400">Please fill the information</Text>
          <InputWithIcon
            iconName="person"
            placeholder="Full Name"
            value={email}
            onChangeText={setEmail}
          />
          <InputWithIcon
            iconName="phone"
            placeholder="Phone Number"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <InputWithIcon
            iconName="email"
            placeholder="example@email.com"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            className="bg-orange-400 items-center my-4 w-[80vw] py-4 px-3 rounded-lg"
          >
            <Text className="text-white font-extrabold text-lg">Proceed</Text>
          </Pressable>
          <Text className="my-3 mb-10 text-gray-600 font-semibold">OR</Text>
          <Text className="text-gray-500 mb-4">If you have a PMG account</Text>
          <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPress}
            className="bg-orange-400 items-center my-4 w-[80vw] py-4 px-3 rounded-lg"
          >
            <Text className="text-white font-extrabold text-lg">Sign In</Text>
          </Pressable>
          <Text>Don't have an account?<Text className="text-orange-400 font-semibold">Register</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
