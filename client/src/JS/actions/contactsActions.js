
import { GET_CONTACTS_LOAD, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL,GET_CONTACT,POST_CONTACT,UPDATE_CONTACT } from "../constants/contactsTypes"

import axios from 'axios'

export const getContacts = () => async (dispatch) => {
    dispatch({ type: GET_CONTACTS_LOAD })
    try {
        let result = await axios.get('api/contact/')
        dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response })

    }
    catch (error) {
        dispatch({ type: GET_CONTACTS_FAIL, payload: error })
    }

}

//delete contact routerContact.delete('/:id',controllers.deletecontactactByid)

export const deleteContact = (id) => async (dispatch) => {
    try{
   let result=await axios.delete(`api/contact/${id}`)
   dispatch(getContacts())

    }
    catch(error){console.log('error')}

}

//getOne Contact

export const getOneContact=(id)=>async (dispatch) =>
{
    try
    {
        let result=await axios.get(`api/contact/${id}`)
        dispatch({ type: GET_CONTACT, payload: result.data.response })
    }
     catch(error)
     {
         console.log(error)
     }
}


export const postContact=(newcontact)=>async(dispatch) =>
{
    try
    {
    let result=await axios.post("api/contact/",newcontact)
    dispatch(getContacts())
    }
     catch(error)
     {
         console.log(error)
     }
}

//edit contact 

export const editContact=(id,newcontact)=>async(dispatch) =>
{
    try
    {
    let result=axios.put(`/api/contact/${id}`,newcontact)
    dispatch(getContacts())
    }
     catch(error)
     {
         console.log(error)
     }
}