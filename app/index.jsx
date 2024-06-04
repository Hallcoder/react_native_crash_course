import { Link, Slot, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import {  Text, View } from "react-native";

export default function App() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/signup");
    }, 50);
  },[]);
  return (
    <View>
      <Text className="text-orange-500 mt-10 font-bold">Header</Text>
      <Link href="/profile">Go to profile</Link>
      <Text className="text-blue-400 mt-4">Footer</Text>
    </View>
  );
}
