import React, { useState } from 'react';
import { AddUser } from "../src/components/Users/userAdd/AddUser";
import styles from "./App.module.css"
import { UsersList } from './components/Users/userList/UsersLIst';

function App() {
  const [usersListData, setUsersList] = useState([
    { username: 'gertea', age: 30 , id: Math.random().toString() }, 
  ]);

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  );

  if (usersListData.length > 0) {
    content = (
      
    <UsersList items={usersListData}  />
    
    );
  }
  const onAddUserHandler = (e) => {
    console.log('Se GUARDA',e)

    setUsersList(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ username: e.username, age: e.age, id: Math.random().toString() });
      return updatedUsers;
    });
    console.log('users:',usersListData)
  }
 
  return (
    <div>
      <section className={styles.AddUsersForm}>
        <AddUser onAddUser={onAddUserHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
