import * as actionType from "./actionTypes";

export const addPlace = (place) => ({
  type: actionType.ADD_PLACE,
  payload: place,
});

export const deletePlace = (key) => ({
  type: actionType.DELETE_PLACE,
  payload: key,
});

const actions = {
  addPlace,
  deletePlace,
};

export default actions;
