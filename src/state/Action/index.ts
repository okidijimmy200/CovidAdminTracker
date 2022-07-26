import { ActionType } from '../ActionTypes'

interface ListTotalCasesAction {
    type: ActionType.LIST_TOTAL_CASES
}

interface ListTotalCasesSuccessAction {
    type: ActionType.LIST_TOTAL_CASES_SUCCESS,
    payload: string[]
}

interface ListTotalCasesErrorAction {
    type: ActionType.LIST_TOTAL_CASES_ERROR,
    payload: string
}

export type Action =
    | ListTotalCasesAction
    | ListTotalCasesSuccessAction
    | ListTotalCasesErrorAction;