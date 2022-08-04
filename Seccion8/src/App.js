import React, { useState } from 'react';
import { AddUser } from "../src/components/Users/userAdd/AddUser";

function App() {
  const [usersList, setUsersList] = useState([
    { username: 'gertea', age: 30 },
    { username: 'gertea2', age: 30 },
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


  return (
    <div>
      <section id="goal-form">
        <AddUser />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
