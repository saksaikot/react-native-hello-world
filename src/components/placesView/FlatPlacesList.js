import React from "react";
import { FlatList } from "react-native";
import Place from "./place";

export default function FlatPlacesList({ places }) {
  return (
    <FlatList
      style={{ width: "100%" }}
      data={places}
      renderItem={(info) => (
        <Place
          place={info.item.value}
          handleOnPress={(place) => alert(info.item.value)}
        />
      )}
    />
  );
}
