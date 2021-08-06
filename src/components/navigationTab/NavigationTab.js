import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FindPlaces from "../homeTabs/FindPlaces";
import SharePlaces from "../homeTabs/SharePlaces";

import Icons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export default function NavigationTab({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Find Places"
        component={FindPlaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Share Places"
        component={SharePlaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="share-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
