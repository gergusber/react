import React, { useState } from 'react'
import styles from './AddUser.module.css';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

export const AddUser = (props) => {
    const [userData, setUserData] = useState({ username: '', age: 0 });
    const [isValid, setIsValid] = useState(true)

    const usernameInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }

        setUserData(event.target.value);
    };


    const onAddUser = (event) => {
        event.preventDefault();
        props.onAddGoal(userData);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={onAddUser}>
                <div >
                    <label htmlFor='username'> UserName</label>
                    <input type="text" id="username" />

                    <label htmlFor='age'> Age</label>
                    <input type="text" id="age" />
                </div>
                
                <Button type="submit" onClick={onAddUser} >Add User</Button>
            </form>
        </Card>

    )
}
