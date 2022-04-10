export const FETCH_SUCESS = "APP/POSTS/FETCH_SUCESS";
export const FETCH_ERROR = "APP/POSTS/FETCH_ERROR";

export const postsReducersInitialState = {
  posts: {
    loading: true,
    posts: {},
    error: "",
  },
};

export const fetchSuccess = (result) => ({
  type: FETCH_SUCESS,
  result,
});

export const fetchError = (result) => ({
  type: FETCH_ERROR,
  result,
});

export const postReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCESS: {
      return {
        ...state,
        posts: {
          loading: false,
          posts: action.result.payload,
          error: "",
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...state,
        posts: {
          loading: false,
          post: {},
          error: "Failed to fetch!",
        },
      };
    }
  }
};
