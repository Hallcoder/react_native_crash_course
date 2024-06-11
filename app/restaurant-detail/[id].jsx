import { usePathname } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import bg from "../../assets/bg.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
const RestaurantDetail = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  return (
    <SafeAreaView>
    <View className="h-full bg-orange-500">
      <ImageBackground source={bg}>
        <Text className="text-4xl mt-4 font-semibold text-white">Kigali Legacy</Text>
        <View className="h-[80vh] bg-white rounded-t-md mt-[20vh]"></View>
      </ImageBackground>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RestaurantDetail;
