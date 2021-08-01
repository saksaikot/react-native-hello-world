import React from "react";
import { View, TouchableOpacity } from "react-native";
import Place from "./place";

export default function Places({ places, handleOnPress }) {
  return (
    <View>
      {places.map((place, index) => (
        <Place key={index} place={place} handleOnPress={handleOnPress} />
      ))}
    </View>
  );
}
