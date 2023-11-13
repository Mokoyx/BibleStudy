import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import FirstScreen from "../tab/FirstScreen";
import SecondScreen from "../tab/SecondScreen";
import ThirdScreen from "../tab/ThirdScreen";
import FirstScreenDetails from "../screens/firststackscreens/FirstScreenDetails";

//constants to enable the tab navigation
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//stack screen to 
function StackGroup(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="FirstScreen" component={FirstScreen}/>
      <Stack.Screen name="FirstScreenDetails" component={FirstScreenDetails}/>
    </Stack.Navigator>
  );
}

//Bottom Tab Navigator
function TabGroup({ navigation }) {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === "StackGroup") {
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
        <Tab.Screen name="StackGroup" component={StackGroup} options={{headerShown:false}} />
        <Tab.Screen name="SecondScreen" component={SecondScreen} options={{headerShown:true}}/>
        <Tab.Screen name="ThirdScreen" component={ThirdScreen} options={{headerShown:true}} />
      </Tab.Navigator>
    );
  }

  export default function Navigation(){
    return(
      <NavigationContainer>
        <TabGroup/>
      </NavigationContainer>

    );
  }