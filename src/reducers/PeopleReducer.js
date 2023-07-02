const INITIAL_STATE = {
    isLoading: false,
    people: [],
    message: ""
  };
  
 const PeopleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "GET_PEOPLE_SUCCES":
        return { ...state, people: action.payload, isLoading: false };
      case "GET_PEOPLE_ERROR":
        return { ...state, message: action.payload, isLoading: false };
      case "GET_PEOPLE_START":
        return { ...state, isLoading: true, message: " " };
      default:
        return state;
    }
  };
  export default  PeopleReducer