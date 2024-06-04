import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView>    
        <View className="bg-orange-500 h-screen">
          <View className="flex-row bg-white items-center w-9/12 rounded-3xl mx-auto my-40 p-1">
            <MaterialIcons name="search" size={40} color={"orange"}/>
            <TextInput
              placeholder="Search your preferred restaurant"
              className="p-2 w-9/12"
            />
          </View>
          <Text className="font-bold text-xl mx-auto">OR</Text>
          <Link href="/restaurant-list">
          <MaterialCommunityIcons name="qrcode" size={160} className="mx-auto my-10"/></Link >
          <Text className="font-bold text-xl mx-auto">Scan, Pay & Enjoy!</Text>
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

export default Home;
