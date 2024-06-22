import * as React from "react";
import { Image, View } from "react-native";
import person from "../../assets/person.jpeg";
import Icon  from "react-native-vector-icons/MaterialIcons";

const MyAppBar=()=>{
  return (
    <View className="flex flex-row mt-4 items-center absolute top-0 left-0 p-4 right-0 justify-between">
      <Icon name="menu" size={25} onPress={() => console.log("Pressed archive")} />
      <Image source={person} className="rounded-full h-10 w-10" />
    </View>

  )
};

export default MyAppBar;
