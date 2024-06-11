import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopSearchBar from "../components/TopSearchBar";
import Icon from "react-native-vector-icons/AntDesign";
import Restaurants from "../components/Restaurants";

const RestaurantList = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-col items-center justify-center border-b border-gray-300">
        <View className="flex-row items-center p-2">
          <Icon name="left" size={30} color="#f48024" />
          <TopSearchBar />
        </View>
        <Restaurants restaurants={[1,2,4,5,6,7,8,9,10]}/>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantList;
