import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Tweet from "../screens/Tweet";

const StackNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
  },
  Login: {
    screen: Login,
  },
  Tweet: {
    screen: Tweet,
  },
});

export default createAppContainer(StackNavigator);
