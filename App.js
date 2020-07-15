import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Store from "./components/state/store";
import AppNavigator from "./components/navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/screens/Login";
import Profile from "./components/screens/Profile";

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
  const Drawer = createDrawerNavigator();

  return (
    <Store>
      <AppNavigator />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="login" component={Login} />
          <Drawer.Screen name="profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Store>
  );
}
