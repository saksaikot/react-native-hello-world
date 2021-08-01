import React from "react";
import { View, Text } from "react-native";
import style from "./place.style";

export default function Place({ place }) {
  return (
    <View style={style.place}>
      <Text>{place}</Text>
    </View>
  );
}
