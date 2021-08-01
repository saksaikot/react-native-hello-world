import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import style from "./place.style";

export default function Place({ place, handleOnPress }) {
  return (
    <Pressable onPress={() => handleOnPress(place)}>
      <View style={style.place}>
        <Text>{place}</Text>
      </View>
    </Pressable>
  );
}
