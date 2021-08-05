import React from "react";
import { View, Modal, Text, Button, ScrollView, Pressable } from "react-native";
import ResponsiveImage from "../responsiveImage/ResponsiveImage";
import Icon from "react-native-vector-icons/FontAwesome5";

import styles from "./placeDetailsModal.style";

export default function PlaceDetailModal({
  selectedPlace,
  handleModalClose,
  handleModalDelete,
}) {
  return (
    <Modal style={styles.modal} animationType="slide">
      <ScrollView style={styles.margin_2}>
        <ResponsiveImage image={selectedPlace.image} />
        <Text style={styles.margin_2}>{selectedPlace.value} </Text>
        <View style={styles.margin_2}>
          <Pressable onPress={() => handleModalDelete(selectedPlace.key)}>
            <Icon name="trash" size={50} color="red" />
          </Pressable>
        </View>
        <View style={styles.margin_2}>
          <Pressable onPress={handleModalClose}>
            <Icon name="times-circle" size={60} />
          </Pressable>
        </View>
      </ScrollView>
    </Modal>
  );
}
