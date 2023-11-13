import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import FirstScreen from "../tab/FirstScreen";
import SecondScreen from "../tab/SecondScreen";
import ThirdScreen from "../tab/ThirdScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function TabNavigator({ navigation }) {
    return (
      <Tab.Navigator
        initialRouteName="Map"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "FirstScreen") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "SecondScreen") {
              iconName = focused ? "journal" : "journal-outline";
            } else if (rn === "ThirdScreen") {
              iconName = focused ? "person" : "person-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: "dodgerblue",
          tabBarInactiveTintColor: "#454545",
          tabBarLabelStyle: {
            paddingBottom: 3,
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen name="FirstScreen" component={FirstScreen} />
        <Tab.Screen name="SecondScreen" component={SecondScreen} />
        <Tab.Screen name="ThirdScreen" component={ThirdScreen} />
      </Tab.Navigator>
    );
  }
  export default Navigation;