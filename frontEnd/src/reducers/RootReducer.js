// need redux and all reducers
import { combineReducers } from 'redux';
import CountriesReducer from '../reducers/CountriesReducer'

// combineReducers takes an object as an arg
// that arg has key:value pair = stateName: reducerFunction
// the reducerFunction wil return a value
const RootReducer = combineReducers({
    countries: CountriesReducer,
})

// export result of combineReducers
export default RootReducer;