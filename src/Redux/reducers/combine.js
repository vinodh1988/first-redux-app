import {combineReducers}   from 'redux'
import {firstReducer,secondReducer, peopleReducer} from './firstreducer'


export const appstate = combineReducers(
    {
        first: firstReducer,
        second: secondReducer,
        peopledata: peopleReducer
    }
)

