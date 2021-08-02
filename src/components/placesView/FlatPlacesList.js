import React from "react";
import { FlatList } from "react-native";
import Place from "./Place";

export default function FlatPlacesList({ places, handleModalSelect }) {
  return (
    <FlatList
      style={{ width: "100%" }}
      data={places}
      renderItem={(info) => (
        <Place
          place={info.item.value}
          handleOnPress={() => handleModalSelect(info.item)}
        />
      )}
    />
  );
}
