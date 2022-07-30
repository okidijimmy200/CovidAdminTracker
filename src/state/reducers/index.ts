import {combineReducers} from 'redux'
import {totalCasesReducer, totalCountriesReducer, GeoCountriesReducer } from './totalCasesReducer';

const reducers = combineReducers({
    totalCases: totalCasesReducer,
    totalCountries: totalCountriesReducer,
    GeoCountries:GeoCountriesReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;