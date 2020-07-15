import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "../screens/Login";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}

const StackNav = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={DrawerNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
