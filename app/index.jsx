import steak from "../assets/bg.jpg";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import { Link, router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="h-full">
      <View className="h-full w-full bg-black">
        <ImageBackground source={steak} imageStyle={{ opacity: 0.4 }} className="h-full mt-10 flex justify-center items-center">
          {/* <ScrollView
            contentContainerStyle={{
              height: "100%",
              display: "flex",
              marginTop:"40vh",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
          > */}
            <Text className="text-4xl  text-white">
              Your Favourite Restaurant App!
            </Text>
            <Link href="restaurant-list" className="p-3 bg-orange-500 m-6 rounded-md">
              <Text className="text-white text-xl">Continue</Text>
            </Link>
          {/* </ScrollView> */}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default App;
