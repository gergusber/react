import React, { useState } from 'react';
import { AddUser } from "./components/Users/userAdd/AddUser";
import styles from "./App.module.css"
import { UsersList } from './components/Users/userList/UsersLIst';

function App() {
  const [usersListData, setUsersList] = useState([
    { username: 'gertea', age: 30, id: Math.random().toString() },
  ]);

  const onDeleteItemHandler = userId => {
    setUsersList(users => {
      const updatedUsers = users.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  );

  if (usersListData.length > 0) {
    content = (
      <UsersList items={usersListData} onDelete={onDeleteItemHandler} />
    );
  }

  const onAddUserHandler = (e) => {
    setUsersList(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ username: e.username, age: e.age, id: Math.random().toString() });
      return updatedUsers;
    });
  }

  return (
    <div>
      <section className={styles.AddUsersForm} >
        <AddUser onAddUser={onAddUserHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
