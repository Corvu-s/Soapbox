import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Store from "./components/state/store";
import AppNavigator from "./components/navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/screens/Login";
import Profile from "./components/screens/Profile";
import StackNav from "./components/navigation/StackNav";
//dev branch
//git https://forum.freecodecamp.org/t/push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too/13222
//https://medium.com/react-native-institute/how-to-use-git-with-react-native-687c12431e36
// in case i forget

//https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da for navigation 5

export default function App() {
  return (
    <Store>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Store>
  );
}
