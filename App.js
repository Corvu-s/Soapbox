import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Store from "./components/state/store";
import AppNavigator from "./components/navigation";

//dev branch
//git https://forum.freecodecamp.org/t/push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too/13222
//https://medium.com/react-native-institute/how-to-use-git-with-react-native-687c12431e36
// in case i forget

///TODO
//get the navigation stuff in->routes,
//get the store done
//get the reducer implemented in a rough state, username and email type things
//import react-native-el;ements or something

export default function App() {
  return (
    <Store>
      <AppNavigator />
    </Store>
  );
}
