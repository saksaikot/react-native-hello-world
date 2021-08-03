import React from "react";
import { View, Text, TouchableOpacity, Pressable, Image } from "react-native";
import ResponsiveImage from "../responsiveImage/ResponsiveImage";
import style from "./place.style";

export default function Place({ place, handleOnPress, image }) {
  return (
    <Pressable onPress={() => handleOnPress(place)}>
      <View style={style.place}>
        <View style={{ width: 50 }}>
          <ResponsiveImage image={image} />
        </View>
        <Text>{place}</Text>
      </View>
    </Pressable>
  );
}
