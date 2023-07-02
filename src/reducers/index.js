import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import PeopleReducer from './PeopleReducer'

const reducers = combineReducers({
	cart: CartReducer,
	people: PeopleReducer,
});

export default reducers;