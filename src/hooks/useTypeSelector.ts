import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { State } from '../state'

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector