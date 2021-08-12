import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { of } from "await-of";

import * as imagePicker from "expo-image-picker";

import ResponsiveImage from "../responsiveImage/ResponsiveImage";

export default function PickImage({ setImage, setErrorMessage }) {
  // const [image, setImage] = useState(null);
  const handlePickImage = async () => {
    const options = {
      mediaTypes: imagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      maxWidth: 500,
      maxHeight: 500,
      base64: true,
    };
    setImage(null);
    const [imagePick, imagePickError] = await of(
      imagePicker.launchImageLibraryAsync(options)
    );

    if (imagePickError) return setErrorMessage(imagePickError);
    if (imagePick.cancelled)
      return setErrorMessage("Picking the image was canceled");

    setErrorMessage(null);
    return setImage(imagePick);
  };

  return (
    <View>
      <Button title="Pick An Image" onPress={handlePickImage} />
    </View>
  );
}
