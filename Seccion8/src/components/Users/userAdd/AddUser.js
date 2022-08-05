import React, { useState } from 'react'
import styles from './AddUser.module.css';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

export const AddUser = (props) => {
    const [usernameData, setUsernameData] = useState('');
    const [ageData, setAgeData] = useState('');

    const [isValidAge, setIsValidAge] = useState(true)
    const [isValidUsername, setIsValidUsername] = useState(true)

    const setUsernameDataHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValidUsername(true);
            setUsernameData(event.target.value);
        }
        setIsValidUsername(false);

    };

    const setAgeDataHandler = event => {
        if (event.target.value.trim().length > 0 && event.target.value > 1) {
            setIsValidAge(true);
            setAgeData(event.target.value);
        }
        setIsValidAge(false);
    };


    const onAddUserHandler = (event) => {
        event.preventDefault();
        console.log(isValidUsername,isValidAge)
        if (isValidAge || isValidUsername) {
            // console.log('Err')
            return;
        }
        console.log({
            username: usernameData,
            age: ageData
        })
        props.onAddUser({ username: usernameData, age: ageData })

        setUsernameData('')
        setAgeData('')
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={onAddUserHandler}>
                <div >
                    <label htmlFor='username'> UserName</label>
                    <input type="text" id="username" value={usernameData} onChange={setUsernameDataHandler} />

                    <label htmlFor='age'> Age</label>
                    <input type="number" id="age" value={ageData} onChange={setAgeDataHandler} />
                </div>

                <Button type="submit" >Add User</Button>
            </form>
        </Card>
    )
}
