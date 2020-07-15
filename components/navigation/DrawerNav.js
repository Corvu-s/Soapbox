import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNav from "./StackNav";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Profile" component={StackNav} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
