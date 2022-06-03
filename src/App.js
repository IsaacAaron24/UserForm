import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {

  const [users, setUsers] = useState([])
  const [userSelect, setUserSelect] = useState(null)
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  },[])

  const getUser = () =>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  const deleteUser = id =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUser())
  }

  const selectUser = user => setUserSelect(user)

  const deselectUser = () => setUserSelect(null)

  return (
    <div className="container">
        <UserForm 
          getUser={getUser} 
          userSelect={userSelect}
          deselectUser={deselectUser} 
        />
        <UserList 
          users={users} 
          selectUser={selectUser}
          deleteUser={deleteUser}  
        />
    </div>
  );
}

export default App;
