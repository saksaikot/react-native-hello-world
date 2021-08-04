import * as actionType from "./actionTypes";

const INIT_STATE = {
  places: [],
};

export const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_PLACE:
      return { ...state, places: state.places.concat(action.payload) };

    case actionType.DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => action.payload !== place.key),
      };

    default:
      return state;
  }
};
