import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text>ForgotPassword</Text>
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

export default ForgotPassword;