import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyAppBar from '../components/appBar';

const Home = () => {
  return (
    <View style={styles.container}>
      <MyAppBar />
       <Text>Let's eat</Text>
       <Text>Nutritious food</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;