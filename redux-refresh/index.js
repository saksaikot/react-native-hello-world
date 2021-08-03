const redux = require("redux");
// console.log(redux);

const initState = { number: 0 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INCREMENT_NUMBER":
      return { ...state, number: state.number + 1 };

    case "ADD":
      return { ...state, number: state.number + action.payload };

    default:
      return state;
  }
  return state;
};

const store = redux.createStore(reducer);

// console.log(store);
console.log(store.getState());
store.getState();
store.subscribe(() => console.log("[Subscribe]", store.getState()));
// console.log("before dispatch", store.getState());
store.dispatch({
  type: "INCREMENT_NUMBER",
});

store.dispatch({
  type: "ADD",
  payload: 10,
});

store.dispatch({
  type: "INCREMENT_NUMBER",
});
// console.log("after dispatch", store.getState());
