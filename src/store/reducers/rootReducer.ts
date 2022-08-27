import { combineReducers } from 'redux'
import counter from './counter'

const rootReducer = combineReducers({
  counter,
})

export type ReducerType = ReturnType<typeof rootReducer>
export default rootReducer
