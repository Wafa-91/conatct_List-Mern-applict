import React, { useState,useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux';
import{postContact,editContact} from'../JS/actions/contactsActions'
//import{getContacts}from'../JS/actions/contactsActions'



const Add = () => {
    const [user, setuser] = useState({name:"",email:"",phone:""})
    const userReducer = useSelector(state => state.contactReducer.user)
    const editReducer = useSelector(state => state.editReducer.edit)
   useEffect(() => {
    editReducer?setuser(userReducer):setuser({name:"",email:"",phone:""})
   }, [editReducer,userReducer])

 const dispatch = useDispatch()

   const handelcontact=()=>
   {

    if(!editReducer){dispatch(postContact(user))}
    else {dispatch(editContact(userReducer._id,user))}
  
   }

  const handlChange=(e)=>
  {
      e.preventDefault();
      setuser({...user,[e.target.name]:e.target.value})
  }
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder=' Name' name='name' onChange={handlChange} />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email'  email='email' onChange={handlChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input placeholder='Phone' phone='phone' onChange={handlChange} />
                </Form.Field>
                <Button type='submit' onClick={handelcontact}>{editReducer?"Edit":"Save"}</Button>
            </Form>
        </div>
    )
}

export default Add
