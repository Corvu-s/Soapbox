import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Title } from "react-native-paper";

function Head({ titleText }) {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#d6d6d6",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
  },
});
export default Head;
