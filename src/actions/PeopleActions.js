import axios from "axios";

export const getPeople = () => (dispatch) => {
  dispatch({ type: "GET_PEOPLE_START" });
  axios
    .get(" https://jsonplaceholder.typicode.com/users")
    .then((response) =>
      dispatch({ type: "GET_PEOPLE_SUCCES", payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: "GET_PEOPLE_ERROR", payload: error })
    );

};
