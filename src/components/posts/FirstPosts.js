import React from "react";
import { useLocation } from "react-router-dom";
import { fetchLoading, fetchSuccess } from "../../reducers/postsReducer";
import { useAppState } from "../../store/Store";

export const FirstPosts = () => {
  const [state, dispatch] = useAppState();
  const location = useLocation();
  console.log(location.key);
  React.useEffect(() => {
    dispatch(fetchLoading());
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) =>
          dispatch(fetchSuccess({ payload: data, error: "Sucess" }))
        );
    }, 2000);
  }, [dispatch, location]);

  return (
    <div style={{ gridArea: "e" }}>
      <h1>Posts</h1>
      {state.posts.loading ? "Loading for 2 sec..." : state.posts.posts.title}
    </div>
  );
};
