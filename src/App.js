import React , {Fragment, useState} from 'react';
import AddUSer from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  const [usersList,setusersList]= useState([]);

  const addUSerHandler=(uName,uAge)=>{
    setusersList((prevUserList)=>{
      return[...prevUserList , {name:uName, age: uAge, id:Math.random().toString()}];
    });
  }


  return (
    <Fragment>
        <AddUSer onAddUser={addUSerHandler} />
        <UserList users={usersList}/>
    </Fragment>
  );
}

export default App;
