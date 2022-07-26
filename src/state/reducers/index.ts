import {combineReducers} from 'redux'
import {totalCasesReducer} from './totalCasesReducer';

const reducers = combineReducers({
    totalCases: totalCasesReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;