import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import MainComponent from "./src/components/MainComponent";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/components/login/Login";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationTab from "./src/components/navigationTab/NavigationTab";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="home" component={NavigationTab} />
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>
        {/* <MainComponent /> */}
      </Provider>
    </NavigationContainer>
  );
}
