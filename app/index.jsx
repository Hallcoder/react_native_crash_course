import steak from "../assets/bg.jpg";
import { Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import favicon from "../assets/favicon.png"
const App = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("Posts");
    }, 5000);
  }, []);
  return (
    <SafeAreaView className="h-full">
      <View className="h-full w-full bg-white ">
        <Text className="m-auto text-5xl text-gray-700 animate-bounce">Json Placeholder</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
