import React from "react";
import { Provider } from "react-redux";
import MainComponent from "./src/components/MainComponent";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}
