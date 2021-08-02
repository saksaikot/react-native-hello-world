import React from "react";
import { View, Modal, Text, Button } from "react-native";
import styles from "./placeDetailsModal.style";
export default function PlaceDetailModal({ selectedPlace, handleModalClose }) {
  return (
    <Modal style={styles.modal}>
      <View style={styles.margin_2}>
        <Text style={styles.margin_2}>{selectedPlace.value}</Text>
        <View style={styles.margin_2}>
          <Button title="Delete" />
        </View>
        <View style={styles.margin_2}>
          <Button title="Close" onPress={handleModalClose} />
        </View>
      </View>
    </Modal>
  );
}
