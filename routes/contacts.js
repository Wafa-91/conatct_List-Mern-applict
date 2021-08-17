

const express=require('express')
const routerContact=express.Router();


const controllers=require('../controllers/contact.controllers')

// post contact
// get all contact
// get contact by id
// delete contact by id 
// update contact by id 

//@POST methode
//@descr post new contact
//@path http://localhost:5002/api/contact/
//params body
routerContact.post('/',controllers.postcontact)

//@GET methode
//@descr get all contacts
//@path http://localhost:5002/api/contact/
routerContact.get('/',controllers.getallcontact)

//@GETmethode
//@descr get contact by id
//@path http://localhost:5002/api/contact/
//params id

routerContact.get('/:id',controllers.getcontactactByid)


//@DELATE methode
//@descr delete contact by id 
//@path http://localhost:5002/api/contact/
//params id

routerContact.delete('/:id',controllers.deletecontactactByid)

//@put methode
//@descr updatecontact by id 
//@path http://localhost:5002/api/contact/
//params id body

routerContact.put('/:id',controllers.updatecontactactByid)

module.exports=routerContact