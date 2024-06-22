import steak from "../assets/bg.jpg";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
const App = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("home");
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="h-full">
      <View className="h-full w-full bg-black">
        <ImageBackground
          source={steak}
          imageStyle={{ opacity: 0.4 }}
          className="h-full mt-10 flex justify-center items-center"
        >
          <Text className="text-4xl  text-white">
            Your Favourite Restaurant App!
          </Text>
          <Link href="login" className="p-3 bg-orange-500 m-6 rounded-md">
            <Text className="text-white text-xl">Continue</Text>
          </Link>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default App;
