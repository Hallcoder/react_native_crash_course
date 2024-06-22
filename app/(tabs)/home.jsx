import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button, Modal, Pressable } from "react-native";
import MyAppBar from "../components/appBar";
import CardComponent from "../components/CardComponent";
import { getToken } from "../utils/storage";
import { useRouter } from "expo-router";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const categories = ["Snacks", "Drinks", "Meals", "Dessert", "Fruits"];
  const onPressIn = () => {};
  useEffect(() => {
    async function fetchToken() {
      let token = await getToken();
      if (!token) router.push("login");
    }
    fetchToken();
  }, []);
  return (
    <View className="flex flex-col justify-center">
      <MyAppBar />
      <View>
        <ScrollView horizontal className="mt-20">
          {categories.map((c) => (
            <CardComponent key={c} text={c} />
          ))}
        </ScrollView>
      </View>
      <Pressable
        onPressIn={() => setModalVisible(true)}
        className="bg-orange-500 p-2 w-4/12 m-2 text-white"
      >
        <Text className="text-white">Open Modal</Text>
      </Pressable>
      <Modal
        visible={modalVisible}
        animationType="slide"
        className="max-h-[80vh]"
      >
        <View>
          <Text>This is my modal content!</Text>
          <Text>This is my modal content!</Text>
          <Text>This is my modal content!</Text>
          <Text>This is my modal content!</Text>
          <Button title="Done" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default Home;
