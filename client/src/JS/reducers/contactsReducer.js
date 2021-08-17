// import constants
import {GET_CONTACTS_LOAD,GET_CONTACTS_SUCCESS,GET_CONTACTS_FAIL,GET_CONTACT} from "../constants/contactsTypes"


const initialState={
contacts:[],
loadcontact:false,
error:null,
user:{}
}

export const contactReducer=(state=initialState,{type,payload})=>
{
switch(type)
{
case GET_CONTACTS_LOAD: return {...state,loadcontact:true}
case GET_CONTACTS_SUCCESS: return {...state,contacts:payload,loadcontact:false}
case GET_CONTACTS_FAIL: return {...state,loadcontact:false,error:payload}
case GET_CONTACT: return {...state,user:payload}
default:return state

}

}