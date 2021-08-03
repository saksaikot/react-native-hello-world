import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import FlatPlacesList from "./src/components/placesView/FlatPlacesList";
import PlaceInput from "./src/components/placesView/PlaceInput";
import styles from "./app.style";
import PlaceDetailModal from "./src/components/placeDetailModal/PlaceDetailModal";

import defaultPlaceImage from "./assets/images/defaultPlace.jpg";

export default function App() {
  const [placeInput, setPlaceInput] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleModalClose = () => setSelectedPlace(null);
  const handleModalSelect = (place) => setSelectedPlace(place);
  const handleModalDelete = (key) => {
    setPlaces(places.filter((place) => key !== place.key));
    setSelectedPlace(null);
  };

  return (
    <View style={styles.container}>
      {selectedPlace ? (
        <PlaceDetailModal
          {...{ selectedPlace, handleModalClose, handleModalDelete }}
        />
      ) : (
        <>
          <PlaceInput
            {...{
              placeInput,
              setPlaceInput,
              places,
              setPlaces,
              defaultPlaceImage,
            }}
          />
          <FlatPlacesList {...{ places, handleModalSelect }} />
        </>
      )}
    </View>
  );
}
