import React, { useState } from "react";
import { View } from "react-native";
import PlaceInput from "../placesView/PlaceInput";
import styles from "./findPlaces.style";
import defaultPlaceImage from "../../../assets/images/defaultPlace.jpg";
import { useSelector } from "react-redux";

export default function MainComponent() {
  const [placeInput, setPlaceInput] = useState("");

  const places = useSelector((state) => state.places);

  return (
    <>
      <View style={styles.container}>
        <PlaceInput
          {...{
            placeInput,
            setPlaceInput,
            places,
            // setPlaces,
            defaultPlaceImage,
          }}
        />
      </View>
    </>
  );
}
