import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
import { User } from './model/User';

const App = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const addUserHandler = (userName: string, userAge: string) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: userName, age: userAge}]
    })
  };
  return (
    <div>
        <AddUser onAddUser={addUserHandler} />
        <UserList users={userList}/>
    </div>
  );
}

export default App;
