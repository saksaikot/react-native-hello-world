import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Places from "./src/components/placesView/places";
import { styles } from "./src/styles/styles";

export default function App() {
  const [placeInput, setPlaceInput] = useState("");
  const [places, setPlaces] = useState([]);
  // const textInputRef = useRef(textInput);
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.placeInput}
          onChangeText={(text) => setPlaceInput(text)}
          value={placeInput}
          placeholder="Add a Place.."
        />
        <Button
          title="Add"
          onPress={() => {
            if (placeInput !== "") {
              setPlaces([...places, placeInput]);
              setPlaceInput("");
            }
          }}
        />
      </View>
      <View style={{ width: "100%" }}>
        <Places places={places} />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });
