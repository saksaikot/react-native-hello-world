import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import PlaceInput from "../placesView/PlaceInput";
import styles from "./sharePlaces.style";
import defaultPlaceImage from "../../../assets/images/defaultPlace.jpg";
import { useSelector } from "react-redux";
import PickImage from "../pickImage/PickImage";
import ResponsiveImage from "../responsiveImage/ResponsiveImage";
import { addPlace, loadPlaces } from "../../redux/actionCreator";
import { db } from "../../firebase/firebase";
import { of } from "await-of";

export default function SharePlaces({ navigation }) {
  const [placeInput, setPlaceInput] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const places = useSelector((state) => state.places);
  useEffect(() => {
    const run = async () => {
      const [places, placesError] = await of(db.places.getAllAsArray());
      // console.log(places);
      loadPlaces(places);
    };
    run();
  }, []);

  const handleAddPlace = async () => {
    if (!placeInput.length) return setErrorMessage("Please give a place name");
    if (!image) return setErrorMessage("Please set an image");

    const data = {
      value: placeInput,
      image: {
        height: image.height,
        width: image.width,
        uri: image.uri,
      },
    };
    const [create, createError] = await of(db.places.create(data));

    if (createError) return setErrorMessage(createError.message);

    data.key = create.key;
    addPlace(data);
    setPlaceInput("");
    setErrorMessage(null);
    setImage(null);
    navigation.navigate("Find Places");
  };

  return (
    <ScrollView style={styles.container}>
      {errorMessage && (
        <View>
          <Text>Error: {errorMessage}</Text>
        </View>
      )}
      {image && <ResponsiveImage image={image} />}
      <PickImage {...{ setImage, setErrorMessage }} />
      <PlaceInput {...{ placeInput, setPlaceInput, handleAddPlace }} />
    </ScrollView>
  );
}
