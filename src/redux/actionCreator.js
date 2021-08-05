import * as actionType from "./actionTypes";
import { dispatch } from "./store";

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

const actions = {
  addPlace,
  deletePlace,
};

export default actions;
