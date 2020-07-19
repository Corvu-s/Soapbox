import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, Keyboard } from "react-native";

import { Avatar, Button, IconButton, TextInput } from "react-native-paper";
import { Context } from "../state/store";
function Profile({ navigation }) {
  //this is a test to try out how to place components withoug having to use absolute positions
  const [tweet, setTweet] = useState("");
  const [state, dispatch] = useContext(Context); //global state
  function handleTweetEvent() {
    console.log("TWEETED" + tweet);
    dispatch({ type: "SET_TWEET_COUNT", data: 20 });
    console.log(state);
    setTweet(" "); //used to clear the text area, do api shit before this
    Keyboard.dismiss();
  }
  function handleCancelTweet() {
    Keyboard.dismiss();
  }
  function handleSubmit() {
    console.log("dismiss the keyboard");
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

        <View style={styles.tweetBox}>
          <TextInput
            autoFocus={true}
            mode="outlined"
            multiline={true}
            value={tweet}
            style={styles.textArea}
            placeholder="Write a Tweet"
            returnKeyType={"done"}
            onSubmitEditing={handleSubmit}
            onChangeText={(e) => setTweet(e)}
          />

          <View style={styles.buttonGroup}>
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
        </View>

        <View style={styles.profileBox}>
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

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileBox: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "30%",
    width: "100%",
    backgroundColor: "#2B2B2B",

    alignItems: "center",
  },
  drawerButton: {
    position: "absolute",
    top: 10,
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

    height: "50%",
    width: 294,

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

    height: "50%",
    width: 294,
    zIndex: 0,
    backgroundColor: "#2B2B2B",
  },

  tweetBox: {
    //controls tweet box upper position and shadowing
    top: "12%", // pushes the tweet box down because of the notch.consider removing because its fixed, maybe have this as a variable depending on the phone version idk
    justifyContent: "center",
    width: "85%",
    height: "50%",
    justifyContent: "space-between",
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
    top: "-10%",
    color: "white",

    backgroundColor: "#2B2B2B",
    borderRadius: 10,
    /////shadow
    shadowColor: "black",
    shadowOffset: { height: 1, width: 2 },
    shadowOpacity: 0.2,
  },
  textArea: {
    top: "5%",
    flex: 1,
    backgroundColor: "#F3F3F3",
    width: "100%",
    height: "80%",
  },
  cancelButton: {
    top: "-10%",
    backgroundColor: "#2B2B2B",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 2 },
    shadowOpacity: 1,
  },

  buttonGroup: {
    height: "10%",
    flexDirection: "row-reverse",
  },
});
