const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      state.username = action.data;
      return {
        state,
      };
    ////////////////
    case "SET_EMAIL":
      state.email = action.data;
      return {
        state,
      };
    ////////////////
    case "SET_GIVEN_NAME":
      state.givenName = action.data;
      return {
        state,
      };
    ////////////////
    case "SET_PIC":
      state.pic = action.data;
      return {
        state,
      };
    ////////////////
    case "SET_TWEET_COUNT":
      state.tweetCount = action.data;
      return {
        state,
      };
    ////////////////
    case "IS_VERIFIED":
      state.isVerified = action.data;
      return {
        state,
      };
    ////////////////
    case "USER_EXISTS":
      state.userExists = action.data;
      return {
        state,
      };
    ////////////////
    default:
      return state;
  }
};

export default Reducer;
