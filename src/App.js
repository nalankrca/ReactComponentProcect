import React from 'react';
import AddUSer from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

function App() {
  return (
    <div>
        <AddUSer />
        <UserList users={[]}/>
    </div>
  );
}

export default App;
