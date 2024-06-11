import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import curry from "../../assets/curry.jpeg";
import { Link, useNavigation } from "expo-router";
const Restaurant = ({ restaurant }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("restaurant-detail/[id]", { id: 36 });
  };
  return (
    <Pressable
      onPress={handlePress}
      className="flex flex-row items-center  bg-gray-200 h-[8vh] rounded-md w-11/12 m-1"
    >
      <View className="h-[80px] w-[100px] rounded-md py-2 px-1">
        <Image source={curry} className="h-full w-full rounded-md" />
      </View>
      <View>
        <Text className="font-semibold text-sm">Kigali Legacy</Text>
        <Text className="text-sm text-gray-400">
          World, Africa, China, Coffee
        </Text>
      </View>
    </Pressable>
  );
};

export default Restaurant;
