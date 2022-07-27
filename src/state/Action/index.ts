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

interface LIST_BY_COUNTRIESAction {
    type: ActionType.LIST_BY_COUNTRIES
}

interface LIST_BY_COUNTRIES_SUCCESSAction {
    type: ActionType.LIST_BY_COUNTRIES_SUCCESS,
    payload: string[]
}

interface LIST_BY_COUNTRIES_ERRORAction {
    type: ActionType.LIST_BY_COUNTRIES_ERROR,
    payload: string
}
export type Action =
    | ListTotalCasesAction
    | ListTotalCasesSuccessAction
    | ListTotalCasesErrorAction
    | LIST_BY_COUNTRIESAction
    | LIST_BY_COUNTRIES_SUCCESSAction
    | LIST_BY_COUNTRIES_ERRORAction