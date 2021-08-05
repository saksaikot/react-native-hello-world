import React from "react";
import { View, TextInput, Button } from "react-native";
import { addPlace } from "../../redux/actionCreator";

import styles from "./placeInput.style";

export default function PlaceInput({
  placeInput,
  setPlaceInput,
  places,
  // setPlaces,
  defaultPlaceImage,
}) {
  // const { addPlace } = actions;

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.placeInput}
        onChangeText={(text) => setPlaceInput(text)}
        value={placeInput}
        placeholder="Add a Place.."
      />
      <Button
        title="Add "
        onPress={() => {
          if (placeInput !== "") {
            addPlace({
              key: Math.random().toString(),
              value: placeInput,
              // image: defaultPlaceImage,
              image: {
                uri: "https://www.travelandexplorebd.com/storage/app/public/posts/September2019/parla2.jpg",
              },
            });
            setPlaceInput("");
          }
        }}
      />
    </View>
  );
}
