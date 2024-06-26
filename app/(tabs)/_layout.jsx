import { Tabs } from "expo-router";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        {/* <Tabs.Screen
          name="menu"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <AntDesign
                  name="home"
                  size={25}
                  color={focused ? "#3EB075" : "#484848"}
                />
              </View>
            ),
          }}
        /> */}
        <Tabs.Screen
          name="Posts"
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <FontAwesome5
                  name="home"
                  size={24}
                  color={focused ? "#3EB075" : "#484848"}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="createPost"
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center gap-22">
                <FontAwesome5
                  name="plus"
                  size={24}
                  color={focused ? "#3EB075" : "#484848"}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;