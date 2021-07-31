import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [textInput, setTextInput] = useState("");
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>My first react native app</Text>
      <Text>{textInput}</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setTextInput(text)}
        value={textInput}
        placeholder="Type Something here"
        keyboardType="default"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
