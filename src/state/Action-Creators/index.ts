import axios from "axios";
import { ActionType } from '../ActionTypes'
import { Action } from '../Action'
import { Dispatch } from 'redux'

export const ListTotalCases = () => async(dispatch: Dispatch<Action>) => {
        try {

            dispatch({type: ActionType.LIST_TOTAL_CASES});
            
            const { data } = await axios.get('https://disease.sh/v3/covid-19/all')
            dispatch({
                type: ActionType.LIST_TOTAL_CASES_SUCCESS,
                payload: data
            })
        }
        catch(err: any){
            dispatch({
                type: ActionType.LIST_TOTAL_CASES_ERROR,
                payload: err.message,
            })
        }
}
