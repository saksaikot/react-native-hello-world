import React, { useEffect, useState } from "react";
import { View, Image, Platform } from "react-native";
export default function ResponsiveImage({ image }) {
  const [imageHeight, setImageHeight] = useState(1);
  const [imageWidth, setImageWidth] = useState(1);
  useEffect(() => {
    const uri = image.uri ? image.uri : null;

    if (Platform.OS === "web") {
      if (uri) imageSizeWithUri(uri);
      else imageSizeWithUri(image);
    } else {
      if (uri) imageSizeWithUri(uri);
      else imageSizeWithOutUri(image);
    }
  }, [imageWidth]);

  const imageSizeWithUri = (uri) =>
    Image.getSize(uri, (width, height) => {
      setImageHeight(Math.ceil(imageWidth * (height / width)));
    });
  const imageSizeWithOutUri = (uri) => {
    const { width, height } = Image.resolveAssetSource(uri);
    setImageHeight(Math.ceil(imageWidth * (height / width)));
  };
  return (
    <View onLayout={(event) => setImageWidth(event.nativeEvent.layout.width)}>
      <Image source={image} style={{ width: "100%", height: imageHeight }} />
    </View>
  );
}
