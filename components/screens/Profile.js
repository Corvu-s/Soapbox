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
    <View style={styles.container}>
      <Text>PROFILE</Text>

      {/* <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={require("../images/test.png")} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card> */}
      <View style={styles.BannerLowerShadow}></View>
      <View style={styles.BannerUpperShadow}>
        <Text>*Breath in</Text>
        <Avatar.Image size={100} source={require("../images/test.png")} />
      </View>
    </View>
  );
}

export default PROFILE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
  avatar: {
    position: "absolute",
    top: 100,
    left: 50,
  },
  BannerUpperShadow: {
    borderRadius: 20,
    shadowColor: "#3A3A3A",
    shadowOffset: {
      width: -5,
      height: -7,
    },
    shadowOpacity: 1,
    shadowRadius: 13,
    elevation: 10,

    ////////////////////postion,not to do with shadow
    position: "absolute",
    top: 100,
    left: 15,
    height: 200,
    width: 350,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2B2B2B",
  },
  BannerLowerShadow: {
    borderRadius: 20,
    shadowColor: "#222222",
    shadowOffset: {
      width: 10,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 13,
    ///////////////////
    position: "absolute",
    top: 100,
    left: 15,
    height: 200,
    width: 350,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#2B2B2B",
  },
});
