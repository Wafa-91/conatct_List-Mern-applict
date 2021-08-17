import {TOGGLE_FALSE,TOGGLE_TRUE} from '../constants/edit'

const initialState={
edit:false

}

export const editReducer=(state=initialState,{type})=>
{
switch(type)
{
case TOGGLE_FALSE: return {...state,edit:false}
case TOGGLE_TRUE: return {...state,edit:true}

default:return state

}

}