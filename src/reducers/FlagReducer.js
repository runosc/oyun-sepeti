const INITIAL_STATE = {
    isLoading: false,
    countries: [],
    message: ""
  };
  
 const FlagReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_COUNTRIES_SUCCES":
        return { ...state, countries: action.payload, isLoading: false };
      case "GET_COUNTRIES_ERROR":
        return { ...state, message: action.payload, isLoading: false };
      case "GET_COUNTRIES_START":
        return { ...state, isLoading: true, message: " " };
      default:
        return state;
    }
  };
  export default  FlagReducer