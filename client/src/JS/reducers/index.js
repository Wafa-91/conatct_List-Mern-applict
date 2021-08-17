import{combineReducers} from 'redux'
import {contactReducer} from './contactsReducer'
import {editReducer} from './edit'
export const rootReducer=combineReducers({contactReducer,editReducer})