import React from 'react';

import UserListItem from '../UserListItem/UserListItem';
import styles from './UsersLIst.module.css';

const UsersList = props => {
  return (
    <ul className={styles.something}>
      {props.items.map(user => (
        <UserListItem
          key={user.id}
          id={user.UserListItem}
          onDelete={props.onDeleteItem}
          user={user}
        >
        </UserListItem>
      ))}
    </ul>
  );
};

export default UsersList;
