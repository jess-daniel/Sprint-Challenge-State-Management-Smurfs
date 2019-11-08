import axios from "axios";

// get action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// post action types
export const START_POST = "START_POST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const postSmurf = smurf => dispatch => {
  dispatch({ type: START_POST });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log("smurf", smurf);
      console.log("res", res);
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: POST_FAILURE, payload: err });
    });
};
