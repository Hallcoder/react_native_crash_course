import React from 'react';
import { Image, Text, View } from 'react-native';
import person from "../../assets/person.jpeg";
 
const CardComponent = ({text}) => {
  return (
    <View className="h-32 w-30">
      <Image source={person} className="h-20 w-20 rounded-full m-2 p-1"/>
      <Text className="text-center font-semibold">{text}</Text>
    </View>
  );
};


export default CardComponent;