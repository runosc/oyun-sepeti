import axios from "axios";

export const getCountries = () => (dispatch) => {
  dispatch({ type: "GET_COUNTRIES_START" });
  axios
    // .get("https://restcountries.com/v3.1/all")
    .get(" https://jsonplaceholder.typicode.com/users")
    .then((response) =>
      dispatch({ type: "GET_COUNTRIES_SUCCES", payload: response.data })
    )
    .catch((error) =>
      dispatch({ type: "GET_COUNTRIES_ERROR", payload: error })
    );

};
