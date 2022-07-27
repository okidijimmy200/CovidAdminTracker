import {combineReducers} from 'redux'
import {totalCasesReducer, totalCountriesReducer } from './totalCasesReducer';

const reducers = combineReducers({
    totalCases: totalCasesReducer,
    totalCountries: totalCountriesReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;