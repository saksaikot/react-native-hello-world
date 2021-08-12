import * as actionType from "./actionTypes";
import { dispatch } from "./store";
import { db } from "../firebase/firebase";

export const addPlace = (place) =>
  dispatch({
    type: actionType.ADD_PLACE,
    payload: place,
  });

export const deletePlace = (key) =>
  dispatch({
    type: actionType.DELETE_PLACE,
    payload: key,
  });
export const loadPlaces = (places) =>
  dispatch({
    type: actionType.LOAD_PLACES,
    payload: places,
  });
const actions = {
  addPlace,
  deletePlace,
  loadPlaces,
};

export default actions;
