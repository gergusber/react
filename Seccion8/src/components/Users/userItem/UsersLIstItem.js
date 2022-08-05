
import React from 'react';
import styles from './UsersLIstItem.module.css';

export const UserListItem = props => {

  const deleteHandler = () => {
     props.onDelete(props.id);
  };

  return (
    <li className={styles.item} onClick={deleteHandler}>
      Username:{props.user.username} <br />
      age:{props.user.age}
    </li>
  );
};
 