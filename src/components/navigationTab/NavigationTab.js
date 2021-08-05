import React from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FindPlaces from "../homeTabs/FindPlaces";
import SharePlaces from "../homeTabs/SharePlaces";
const Tab = createBottomTabNavigator();

export default function NavigationTab({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Find Places" component={FindPlaces} />
      <Tab.Screen name="Share Places" component={SharePlaces} />
    </Tab.Navigator>
  );
}
