import React from 'react';
import { TextInput, View } from 'react-native';
const TopSearchBar = () => {
  return (
    <View className="flex flex-row w-11/12 mx-4 items-center">
        <TextInput className="py-4 flex-grow" placeholder='Search...'/>
    </View>
  );
};
  


export default TopSearchBar;