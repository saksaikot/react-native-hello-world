import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import PlaceInput from "../placesView/PlaceInput";
import styles from "./sharePlaces.style";
import defaultPlaceImage from "../../../assets/images/defaultPlace.jpg";
import { useSelector } from "react-redux";
import PickImage from "../pickImage/PickImage";
import ResponsiveImage from "../responsiveImage/ResponsiveImage";
import { addPlace } from "../../redux/actionCreator";

export default function SharePlaces({ navigation }) {
  const [placeInput, setPlaceInput] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const places = useSelector((state) => state.places);

  const handleAddPlace = () => {
    if (!placeInput.length) return setErrorMessage("Please give a place name");
    if (!image) return setErrorMessage("Please set an image");

    addPlace({
      key: Math.random().toString(),
      value: placeInput,
      image,
      // image: defaultPlaceImage,
      // image: {
      //   uri: "https://www.travelandexplorebd.com/storage/app/public/posts/September2019/parla2.jpg",
      // },
    });
    setPlaceInput("");
    setErrorMessage(null);
    setImage(null);
    navigation.navigate("Share Places");
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
