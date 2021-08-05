import React from "react";
import { View, Text, Button } from "react-native";

export default function FindPlaces({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Find Places</Text>
      <View>
        <Button
          title="Login"
          onPress={() => navigation.navigate("login")}
        ></Button>
      </View>
    </View>
  );
}
