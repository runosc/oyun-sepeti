import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import FlagReducer from './FlagReducer'

const reducers = combineReducers({
	cart: CartReducer,
	flag: FlagReducer,
});

export default reducers;