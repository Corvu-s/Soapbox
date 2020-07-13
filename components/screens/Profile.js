import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function PROFILE() {
  return (
    <View style={styles.container}>
      <Text>PROFILE</Text>
    </View>
  );
}

export default PROFILE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
