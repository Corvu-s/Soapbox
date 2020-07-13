import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function TWEET() {
  return (
    <View style={styles.container}>
      <Text>TWEET</Text>
    </View>
  );
}

export default TWEET;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
