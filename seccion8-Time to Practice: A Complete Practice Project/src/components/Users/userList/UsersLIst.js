import React from 'react';
import Card from '../../UI/Card/Card';
import { UserListItem } from '../userItem/UsersLIstItem';
import styles from './UsersLIst.module.css';

export const UsersList = props => {
  return (
    <Card className={styles.users}>
      <ul >
        {props.items.map(user => (
          <UserListItem
            key={user.id}
            id={user.id}
            onDelete={props.onDelete}
            user={user}
          >
          </UserListItem>
        ))}
      </ul>
    </Card>
  );
}; 