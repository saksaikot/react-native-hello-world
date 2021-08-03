import React from "react";
import { View, Modal, Text, Button, ScrollView } from "react-native";
import ResponsiveImage from "../responsiveImage/ResponsiveImage";

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
          <Button
            title="Delete"
            onPress={() => handleModalDelete(selectedPlace.key)}
          />
        </View>
        <View style={styles.margin_2}>
          <Button title="Close" onPress={handleModalClose} />
        </View>
      </ScrollView>
    </Modal>
  );
}
