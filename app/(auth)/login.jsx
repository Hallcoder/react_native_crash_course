import React, { useState } from "react";
import { Image, Text, View, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputWithIcon from "../components/inputWithIcon";
import google from "../../assets/google.jpg";
import facebook from "../../assets/facebook.png";
import { Link, router } from "expo-router";
import axios from "axios";
import Toast from "react-native-toast-message";
import { storeToken } from "../utils/storage";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const onPressIn = () => {
    if(!email || !password) {
      Toast.show({
        type:'error',
        text1:"Validation Error",
        text2:"Fill out all the required information"
      });
      return;
    }
    setLoading(true);
    axios
      .post(
        "http://10.5.223.160:3001/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((d) => {
        Toast.show({
          type: "success",
          text1: "Logged In Successfully!",
        });
        console.log(d.data);
        storeToken(d.data.token);
        router.push("home");
      })
      .catch((err) => {
        Toast.show({
          type: "error",
          text1: err.message,
        })
        console.log("Error", err);
      }).finally(() => {
        setLoading(false);
      });;
  };

  return (
    <ScrollView className="flex-1 bg-orange-400  mb-4 h-fit">
      <View className="bg-white mt-[20vh] items-center sticky rounded-t-3xl flex-col">
        <View className="flex-row justify-center mt-8">
          <Text className="text-6xl font-extrabold">Supa</Text>
          <Text className="text-6xl text-orange-400 font-extrabold">Menu</Text>
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
        <Link href={"initiate-reset"} className="text-sm text-orange-500">
          Forgot Password?
        </Link>
        <Pressable
          onPressIn={onPressIn}
          className="bg-orange-400 items-center my-4 w-[80vw] py-4 px-3 rounded-lg"
        >
          <Text className="text-white font-extrabold text-lg">{isLoading ? "Loading...":"Sign In"}</Text>
        </Pressable>
        <Text>OR</Text>
        <Pressable className="w-[80vw] justify-center rounded-md flex mt-8 flex-row items-center border py-3 mx-4">
          <Image source={google} className="bg-orange-200 m-1 h-5 w-5"></Image>
          <Text>Login with Google</Text>
        </Pressable>
        <Pressable className="w-[80vw] justify-center rounded-md flex my-8 flex-row items-center border py-3 mx-4">
          <Image
            source={facebook}
            className="bg-orange-200 m-1 h-5 w-5"
          ></Image>
          <Text>Login with Facebook</Text>
        </Pressable>
        <Text>
          Don't have an account?
          <Link href="/signup" className="text-orange-500 mb-2">
            Register
          </Link>
        </Text>
      </View>
      <Toast />
    </ScrollView>
    // </SafeAreaView>
  );
};

export default login;
