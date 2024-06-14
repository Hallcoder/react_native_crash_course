import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const InputWithIcon = ({ iconName, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View className="flex-row p-2 border border-gray-100 m-1 rounded-md justify-center items-center">
    <Icon name={iconName} size={30} color={"gray"}/>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      className="p-1 w-9/12"
    />
  </View>
  );
};


export default InputWithIcon;