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

export const ListByCountries = () => async(dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: ActionType.LIST_BY_COUNTRIES})

        const { data } = await axios.get('https://disease.sh/v3/covid-19/countries')

        dispatch({
            type: ActionType.LIST_BY_COUNTRIES_SUCCESS,
            payload: data
        })
    }
    catch(err: any) {
        dispatch({
            type: ActionType.LIST_BY_COUNTRIES_ERROR,
            payload: err.message,
        })
    }
}

export const ListGeoCountries = () => async(dispatch: Dispatch<Action>) => {
    try {
        dispatch({ type: ActionType.LIST_GEO_COUNTRIES})

        const { data } = await axios.get('https://s3.amazonaws.com/rawstore.datahub.io/23f420f929e0e09c39d916b8aaa166fb.geojson')

        const results = data
        dispatch({
            type: ActionType.LIST_GEO_COUNTRIES_SUCCESS,
            payload: results
        })
    }
    catch(err: any) {
        dispatch({
            type: ActionType.LIST_GEO_COUNTRIES_ERROR,
            payload: err.message,
        })
    }
}