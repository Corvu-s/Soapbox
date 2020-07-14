import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
function PROFILE({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>

      <Card>
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
      </Card>
    </View>
  );
}

export default PROFILE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  avatar: {
    position: "absolute",
    top: 100,
    left: 50,
  },
});
