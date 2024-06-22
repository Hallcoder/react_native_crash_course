import React, { useState } from 'react';
import { StyleSheet,ScrollView, Text, View, Pressable } from 'react-native';
import InputWithIcon from '../components/inputWithIcon';

const InitiateReset = () => {
    const [email,setEmail] = useState();
    const handleInitiateReset = () =>{
      
    }
  return (
    <View className="bg-orange-400  mb-4 h-fit">
      <View className="bg-white h-full mt-[20vh] items-center sticky rounded-t-3xl flex-col">
      <View className="flex-row justify-center mt-20">
          <Text className="text-6xl font-extrabold">Supa</Text>
          <Text className="text-6xl text-orange-400 font-extrabold">Menu</Text>
      </View>
      <View className="items-center mt-8">
          <Text className="m-1 text-lg">Enter email to reset</Text>
          <InputWithIcon
              iconName="mail"
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}
            />
      </View>
      <Pressable
          onPress={handleInitiateReset}
          className="bg-orange-400 items-center my-4 w-[80vw] py-4 px-3 rounded-lg"
        >
          <Text className="text-white font-extrabold text-lg">Get email</Text>
        </Pressable>
    </View>
    </View>
  );
};

export default InitiateReset;