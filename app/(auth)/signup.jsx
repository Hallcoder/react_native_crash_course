import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import InputWithIcon from "../components/inputWithIcon";
import { Link, router } from "expo-router";
import axios from "axios";
import Toast from "react-native-toast-message";

const Login = () => {
  const [email, setEmail] = useState("hamisi@gmail.com");
  const [password, setPassword] = useState("123456");
  const [name, setName] = useState("Hamisi");
  const [isLoading, setLoading] = useState(false);
  const onPressIn = () => {
    console.log({ email, name, password });
    setLoading(true);
    axios
      .post(
        "http://10.5.221.205:3001/user/register",
        { email, name, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((d) => {
        Toast.show({
          type: "success",
          text1: d.data.message,
        });
        console.log(d.data);
        setLoading(false);
        router.push("login");
      })
      .catch((err) => {
        Toast.show({
          type: "error",
          text1: "Something went wrong!",
        }).finally(() => {
          setLoading(false);
        });
        console.log("Error", err.message);
      });
  };

  const onPressOut = () => {
    console.log("Press Out");
  };
  const handleGoToSignIn = () => {
    router.push("/login");
  };
  return (
    <ScrollView className="flex-1 bg-orange-400 h-fit">
      <View className="bg-white mt-[13vh] items-center sticky rounded-t-3xl flex-col">
        <View className="flex-row justify-center mt-8">
          <Text className="text-6xl font-extrabold">Supa</Text>
          <Text className="text-6xl text-orange-400 font-extrabold">Menu</Text>
        </View>
        <Text className="font-semibold my-4">Welcome...</Text>
        <Text className="text-gray-400">Please fill the information</Text>
        <InputWithIcon
          iconName="person"
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        <InputWithIcon
          iconName="email"
          placeholder="example@email.com"
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
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          className="bg-orange-400 items-center my-2 w-[80vw] py-4 px-3 rounded-lg"
        >
          <Text className="text-white font-extrabold text-lg">
            {isLoading ? "Loading" : "Proceed"}
          </Text>
        </Pressable>
        <Text className="my-3 mb-4 text-gray-600 font-semibold">OR</Text>
        <Text className="text-gray-500 mb-2">If you have a PMG account</Text>
        <Pressable
          onPress={handleGoToSignIn}
          className="bg-orange-400 items-center my-4 w-[80vw] py-4 px-3 rounded-lg"
        >
          <Text className="text-white font-extrabold text-lg">Sign In</Text>
        </Pressable>
      </View>
      <Toast />
    </ScrollView>
  );
};

export default Login;
