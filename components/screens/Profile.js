import React from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  shadow,
} from "react-native-paper";
function PROFILE({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.BannerLowerShadow}></View>
        <View style={styles.BannerUpperShadow}>
          <Text style={styles.name}>Spongebob</Text>
          <Text style={styles.handle}>@spongboi</Text>
          <Text style={styles.tweetNum}>42069 tweets</Text>

          <Avatar.Image
            size={100}
            source={require("../images/test.png")}
            style={styles.avatar}
          />
        </View>
      </View>
    </>
  );
}

export default PROFILE;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 551,
    left: 0,
    height: 270,
    width: 375,
    borderRadius: 20,
    backgroundColor: "#2B2B2B",
  },
  avatar: {
    position: "absolute",
    left: 180,
  },
  name: {
    fontSize: 30,
    color: "white",
    top: 10,
    left: 10,
    position: "absolute",
  },
  tweetNum: {
    position: "absolute",
    fontSize: 11,
    color: "white",
    top: 80,
    left: 10,
  },
  handle: {
    position: "absolute",
    fontSize: 20,
    color: "grey",
    top: 50,
    left: 10,
  },
  BannerUpperShadow: {
    borderRadius: 20,
    shadowColor: "#3A3A3A",
    shadowOffset: {
      width: -5,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 13,
    elevation: 10,

    ////////////////////postion,not to do with shadow
    position: "absolute",
    top: 50,
    left: 40,
    height: 160,
    width: 294,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2B2B2B",
  },
  BannerLowerShadow: {
    borderRadius: 20,
    shadowColor: "#222222",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 13,
    ///////////////////
    position: "absolute",
    top: 50,
    left: 40,
    height: 160,
    width: 294,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2B2B2B",
  },
});
