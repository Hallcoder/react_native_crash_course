import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotificationsTab = () => {
  return (
    <View style={styles.container}>
      <Text>NotificationsTab</Text>
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

export default NotificationsTab;