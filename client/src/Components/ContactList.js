import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../JS/actions/contactsActions';
import Contact from './Contact'



const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contactReducer.contacts)
    const loadcontact = useSelector(state => state.contactReducer.loadcontact)
    console.log(contacts, loadcontact)
    useEffect(() => {
        dispatch(getContacts())
    }, []);
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>


            {loadcontact ? <h1>load</h1> : contacts.map(el => <Contact key={el._id} contact={el} />)}
        </div>
    )
}

export default ContactList
