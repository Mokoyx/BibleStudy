import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

// Import the Study and StudyDetails components
import Bible from "../tab/Bible";
import Settings from "../tab/Settings";
import Study from "../tab/Study";
import StudyDetails from "../screens/studyScreens/StudyDetails";

// Constants to enable the tab navigation
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack screen to
function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Study"
        component={Study}
        options={{ headerShown: true}}
      />
      <Stack.Screen
        name="StudyDetails"
        component={StudyDetails}
        options={{ headerShown: true, headerTitle: "The Holy Scriptures" }}
      />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === "StackGroup") {
            iconName = focused ? "journal" : "journal-outline";
          } else if (rn === "Bible") {
            iconName = focused ? "book" : "book-outline";
          } else if (rn === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
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
      <Tab.Screen
        name="StackGroup"
        component={StackGroup}
        options={{ headerShown: false, tabBarLabel: "Fundaments" }}
      />
      <Tab.Screen
        name="Bible"
        component={Bible}
        options={{ headerShown: true, tabBarLabel: "Bible" }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: true, tabBarLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
