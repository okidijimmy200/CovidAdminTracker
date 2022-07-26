import { ActionType } from '../ActionTypes'
import { Action } from '../Action'

interface TotalCasesState {
    loading?: boolean;
    error?: string | null;
    data: string[],
}

const initialState = {
    loading: false,
    error: null,
    data: [],
  };

export const totalCasesReducer = (state: TotalCasesState= initialState, action: Action): TotalCasesState => {
    switch(action.type) {
        case ActionType.LIST_TOTAL_CASES:
            return {loading: true, error: null, data: []}
        case ActionType.LIST_TOTAL_CASES_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.LIST_TOTAL_CASES_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
}