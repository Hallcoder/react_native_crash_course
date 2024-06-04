import React, { useState } from "react";
import { Image, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputWithIcon from "../components/inputWithIcon";
import google from "../../assets/google.jpg";
import facebook from "../../assets/facebook.png";
import { Link, router } from "expo-router";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPressIn = () => {
    console.log("Press In");
  };
  const onPress = () => {
    console.log("on press");
  };
  const onPressOut = () => {
    console.log("Press Out");
  };
  const handleSignIn = () =>{
    router.push("/home")
  }
  return (

    <SafeAreaView>
      {/* <RootLayout> */}
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
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}
            />
            <InputWithIcon
              iconName="lock"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Pressable        
              onPress={handleSignIn}
              className="bg-orange-400 items-center my-4 w-[80vw] py-4 px-3 rounded-lg"
            >
              <Text className="text-white font-extrabold text-lg">Sign In</Text>
            </Pressable>
            <Text>OR</Text>
            <Pressable className="w-[80vw] justify-center rounded-md flex mt-8 flex-row items-center border py-3 mx-4">
              <Image
                source={google}
                className="bg-orange-200 m-1 h-5 w-5"
              ></Image>
              <Text>Login with Google</Text>
            </Pressable>
            <Pressable className="w-[80vw] justify-center rounded-md flex my-8 flex-row items-center border py-3 mx-4">
              <Image
                source={facebook}
                className="bg-orange-200 m-1 h-5 w-5"
              ></Image>
              <Text>Login with Facebook</Text>
            </Pressable>
            <Text>Forgot Password</Text>
            <Text>
              Don't have an account?
              <Link href="/signup" className="text-orange-500">
                Register
              </Link>
            </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
