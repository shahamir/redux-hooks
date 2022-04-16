import React from "react";
import { useAppState } from "../../store/Store";

export const SecondPosts = () => {
  const [state] = useAppState();

  return (
    <div style={{ gridArea: "f" }}>
      <h1>Second posts</h1>
      {state.posts.loading
        ? "Loading even though I don't fetch anything and neither do my parent!"
        : "Not loading and no parent told me this! Thank you context + useReducers <3"}
    </div>
  );
};
