import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  settings: { showTweetNum: true, showAds: false },
  username: "",
  email: "",
  givenName: "",
  pic: "",
  tweetCount: 1,
  userExists: false,
  isVerified: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
