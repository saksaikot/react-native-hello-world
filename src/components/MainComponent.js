import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import FlatPlacesList from "./placesView/FlatPlacesList";
import PlaceInput from "./placesView/PlaceInput";
import styles from "./mainComponent.style";
import PlaceDetailModal from "./placeDetailModal/PlaceDetailModal";

import defaultPlaceImage from "../../assets/images/defaultPlace.jpg";

export default function MainComponent() {
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
