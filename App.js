import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import Place from "./src/components/placesView/place";
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
              setPlaces([
                ...places,
                { key: Math.random().toString(), value: placeInput },
              ]);
              setPlaceInput("");
            }
          }}
        />
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={places}
        renderItem={(info) => (
          <Place
            place={info.item.value}
            handleOnPress={(place) => alert(info.item.value)}
          />
        )}
      />
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
