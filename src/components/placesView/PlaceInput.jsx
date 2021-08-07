import React from "react";
import { View, TextInput, Button } from "react-native";
import { addPlace } from "../../redux/actionCreator";

import styles from "./placeInput.style";

export default function PlaceInput({
  placeInput,
  setPlaceInput,
  handleAddPlace,
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
      <Button title="Add Place" onPress={() => handleAddPlace()} />
    </View>
  );
}
