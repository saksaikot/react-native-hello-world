import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import FlatPlacesList from "./src/components/placesView/FlatPlacesList";
import PlaceInput from "./src/components/placesView/PlaceInput";
import styles from "./app.style";

export default function App() {
  const [placeInput, setPlaceInput] = useState("");
  const [places, setPlaces] = useState([]);

  const placeInputProps = { placeInput, setPlaceInput, places, setPlaces };
  return (
    <View style={styles.container}>
      <PlaceInput {...placeInputProps} />
      <FlatPlacesList places={places} />
    </View>
  );
}
