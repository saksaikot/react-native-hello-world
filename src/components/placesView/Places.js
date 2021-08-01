import React from "react";
import { View } from "react-native";
import Place from "./place";

export default function Places({ places }) {
  return (
    <View>
      {places.map((place, index) => (
        <Place key={index} place={place} />
      ))}
    </View>
  );
}
