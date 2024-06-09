import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopSearchBar from './components/TopSearchBar';

const RestaurantList = () => {
  return (
    <SafeAreaView>
    <View>
      <TopSearchBar />
    </View>
    </SafeAreaView>
  );
};


export default RestaurantList;