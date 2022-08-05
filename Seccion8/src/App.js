import React, { useState } from 'react';
import { AddUser } from "../src/components/Users/userAdd/AddUser";
import styles from "./App.module.css"

function App() {
  const [usersList, setUsersList] = useState([
    { username: 'gertea', age: 30 }, 
  ]);

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  );

  if (usersList.length > 0) {
    content = (
      <p> hola </p>
      // <CourseGoalList items={usersList} onDeleteItem={deleteItemHandler} />
    );
  }
  const onAddUserHandler = (e) => {
    console.log('Se GUARDA',e)
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
