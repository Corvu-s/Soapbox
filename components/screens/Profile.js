import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";

import { Avatar, Button, IconButton, TextInput } from "react-native-paper";
import { Context } from "../state/store";
function PROFILE({ navigation }) {
  const [tweet, setTweet] = useState("");
  const [state, dispatch] = useContext(Context); //global state
  function handleTweetEvent() {
    console.log("TWEETED" + tweet);
    dispatch({ type: "SET_TWEET_COUNT", data: 20 });
    console.log(state);
    setTweet(" "); //used to clear the text area, do api shit before this
    Keyboard.dismiss(); //get rid of keyboard
  }
  function handleCancelTweet() {
    Keyboard.dismiss();
  }
  return (
    <>
      <View style={styles.main}>
        <IconButton
          size={40}
          style={styles.drawerButton}
          icon="menu"
          onPress={() => {
            navigation.openDrawer();
          }}
        />

        <View style={styles.tweetBoxLower}>
          <TextInput
            multiline={true}
            value={tweet}
            style={styles.textArea}
            placeholder="Write a Tweet"
            onChangeText={(e) => setTweet(e)}
            keyboardType="twitter"
          />
          <Button
            icon="twitter"
            style={styles.tweetButton}
            mode="contained"
            onPress={handleTweetEvent}
          >
            Tweet
          </Button>
          <IconButton
            color="white"
            icon="cancel"
            style={styles.cancelButton}
            mode="contained"
            onPress={handleCancelTweet}
          ></IconButton>
        </View>

        <View style={styles.container}>
          <View style={styles.BannerLowerShadow}></View>
          <View style={styles.BannerUpperShadow}>
            <Text style={styles.name}>Spongebob</Text>
            <Text style={styles.handle}>@spongboi</Text>
            {state.tweetCount == 1 ? (
              <Text style={styles.tweetNum}>{state.tweetCount} tweet</Text>
            ) : (
              <Text style={styles.tweetNum}>{state.tweetCount} tweets</Text>
            )}

            <Avatar.Image
              size={100}
              source={require("../images/test.png")}
              style={styles.avatar}
            />
          </View>
        </View>
      </View>
    </>
  );
}

export default PROFILE;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  container: {
    height: "50%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#2B2B2B",
  },
  drawerButton: {
    position: "absolute",
    top: 20,
    left: 10,
    color: "black",
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
    top: 55,
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

    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2B2B2B",
  },

  tweetBoxLower: {
    position: "absolute",
    //controls tweet box upper position and shadowing
    position: "absolute",
    width: 310,
    height: 370,
    left: 35,
    top: 100,
    borderRadius: 20,
    backgroundColor: "#F3F3F3",
    /////////////////////shadow"#cfcfcf"
    shadowColor: "#cfcfcf",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
  },
  tweetButton: {
    color: "white",
    top: 330,
    left: 180,
    position: "absolute",
    backgroundColor: "#2B2B2B",
    borderRadius: 10,
    /////shadow
    shadowColor: "black",
    shadowOffset: { height: 1, width: 2 },
    shadowOpacity: 0.2,
  },
  textArea: {
    position: "absolute",
    top: 15,
    left: 0,
    backgroundColor: "#F3F3F3",
    height: 300,
    width: 310,
  },
  cancelButton: {
    position: "absolute",
    top: 323,
    left: 130,
    backgroundColor: "#2B2B2B",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 2 },
    shadowOpacity: 1,
  },
});
