import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icons from "react-native-vector-icons/Ionicons";
import SharePlaces from "../homeTabs/SharePlaces";
import FindPlaces from "../homeTabs/FindPlaces";
const Tab = createBottomTabNavigator();

export default function NavigationTab({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Share Places"
        component={SharePlaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="share-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Find Places"
        component={FindPlaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="map" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
