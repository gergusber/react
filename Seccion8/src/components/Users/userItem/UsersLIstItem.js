
import React from 'react';
import styles from './UserListItem.module.css';

const UserListItem = props => {

  const deleteHandler = () => {
     props.onDelete(props.id);
  };

  return (
    <li className={styles.UserList} onClick={deleteHandler}>
      Username:{props.user.username}
      age:{props.user.age}
    </li>
  );
};

export default UserListItem;
