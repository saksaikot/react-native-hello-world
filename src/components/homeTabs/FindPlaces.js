import React, { useState } from "react";
import { useSelector } from "react-redux";
import PlaceDetailModal from "../placeDetailModal/PlaceDetailModal";
import FlatPlacesList from "../placesView/FlatPlacesList";
import { deletePlace } from "../../redux/actionCreator";

export default function FindPlaces() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const places = useSelector((state) => state.places);
  // console.log(places, "findplaces");

  const handleModalSelect = (place) => setSelectedPlace(place);
  const handleModalClose = () => setSelectedPlace(null);
  const handleModalDelete = (key) => {
    // setPlaces(places.filter((place) => key !== place.key));
    deletePlace(key);
    setSelectedPlace(null);
  };
  return (
    <>
      {selectedPlace && (
        <PlaceDetailModal
          {...{ selectedPlace, handleModalClose, handleModalDelete }}
        />
      )}
      <FlatPlacesList {...{ places, handleModalSelect }} />
    </>
  );
}
