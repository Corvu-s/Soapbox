import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Head from "./Head";
function Login({ navigation }) {
  //most likley replaced by twitter login page on google Login
  return (
    <>
      <Head titleText="Login" />
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          style={styles.userName}
          placeholder="enter username/email"
        />
        <TextInput
          mode="outlined"
          style={styles.password}
          placeholder="enter password"
        />
        <Button
          color="black"
          style={styles.login}
          onPress={() => {
            navigation.navigate("Test");
          }}
        >
          {" "}
          LOGIN
        </Button>
      </View>
    </>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  userName: {
    height: 50,
  },
  password: {
    height: 50,
  },
  login: {
    color: "#000000",
  },
});
