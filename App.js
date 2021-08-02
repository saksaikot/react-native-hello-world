import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import FlatPlacesList from "./src/components/placesView/FlatPlacesList";
import PlaceInput from "./src/components/placesView/PlaceInput";
import styles from "./app.style";
import PlaceDetailModal from "./src/components/placeDetailModal/PlaceDetailModal";

export default function App() {
  const [placeInput, setPlaceInput] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleModalClose = () => setSelectedPlace(null);
  const handleModalSelect = (place) => setSelectedPlace(place);

  return (
    <View style={styles.container}>
      {selectedPlace ? (
        <PlaceDetailModal {...{ selectedPlace, handleModalClose }} />
      ) : (
        <>
          <PlaceInput {...{ placeInput, setPlaceInput, places, setPlaces }} />
          <FlatPlacesList {...{ places, handleModalSelect }} />
        </>
      )}
    </View>
  );
}
