import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const TopSearchBar = () => {
  return (
    <View className="flex flex-row w-full border-b items-center">
        <Icon name="ios-arrow-back" size={30} color="#f48024"/>
        <TextInput className="py-4 flex-grow" placeholder='Search...'/>
    </View>
  );
};



export default TopSearchBar;