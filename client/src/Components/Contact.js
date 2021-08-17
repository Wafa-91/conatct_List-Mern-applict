import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteContact,getOneContact} from '../JS/actions/contactsActions';
import { toggleTrue } from '../JS/actions/editAction';

const Contact = ({contact}) => {
  const dispatch = useDispatch();
   

    
    return (
        <div>
            <Card>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src='/images/avatar/large/steve.jpg'
      />
      <Card.Header>{contact.name}</Card.Header>
      <Card.Meta>{contact.email}</Card.Meta>
      <Card.Meta>{contact.phone}</Card.Meta>
     
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <Button inverted color='green' onClick={()=>{dispatch(getOneContact(contact._id));dispatch(toggleTrue())}} ><Link to={`/edit/${contact._id}`}>Edit</Link></Button>
        <Button inverted  color='red' onClick={()=>dispatch(deleteContact(contact._id))}>  Delete</Button>
      </div>
    </Card.Content>
   
  </Card>
        </div>
    )
}

export default Contact
