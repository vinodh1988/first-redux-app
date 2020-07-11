import {combineReducers}   from 'redux'
import {firstReducer,secondReducer} from './firstreducer'


export const appstate = combineReducers(
    {
        first: firstReducer,
        second: secondReducer
    }
)

