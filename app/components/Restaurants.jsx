import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Restaurant from './Restaurant';

const Restaurants = ({restaurants}) => {
  return (
    <View className="flex flex-col flex-grow items-center h-5/6 m-2 w-full">
      {restaurants.map((r) =>{
        return <Restaurant restaurant={r}/>
      })}
    </View>
  );
};



export default Restaurants;