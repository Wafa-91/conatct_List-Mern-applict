
import './App.css';
import ContactList from './Components/ContactList';
import Add from './Components/Add';


import { Route, Switch} from "react-router";
import { Link } from 'react-router-dom';
import { Button} from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { toggleFalse } from './JS/actions/editAction';





function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h2>MERN APPLICATION</h2>
      <Button inverted color='yellow'  onClick={()=>dispatch(toggleFalse())}> <Link to="/add">Add Contact</Link></Button>
      <Button inverted color='yellow'> <Link to="/">Contact List</Link>
       </Button>

      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
      </Switch>
    </div>
  );
}

export default App;


