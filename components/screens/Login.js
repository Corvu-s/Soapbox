import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
