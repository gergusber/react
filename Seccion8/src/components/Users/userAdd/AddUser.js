import React, { useState } from 'react'
import styles from './AddUser.module.css';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/Modal/ErrorModal';

export const AddUser = (props) => {
    const [usernameData, setUsernameData] = useState('');
    const [ageData, setAgeData] = useState('');
    const [error, setError] = useState();

    const setUsernameDataHandler = event => {
        setUsernameData(event.target.value);
    };

    const setAgeDataHandler = event => {
        setAgeData(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }
    const onAddUserHandler = (event) => {
        event.preventDefault();

        if (usernameData.trim().length === 0 || ageData.trim().length === 0) {
            setError({
                title: "invalid Input Username",
                message: "please add a valid name and age."
            })
            return;
        }
        if (+ageData < 1) {
            setError({
                title: "invalid Input Username",
                message: "please add a valid Age greater than 0."
            })
            return;
        }
        props.onAddUser({ username: usernameData, age: ageData })

        setUsernameData('')
        setAgeData('')
    }

    return (
        <div>
            {error && <ErrorModal
                title={error.title}
                message={error.message} onReset={errorHandler} />}

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
        </div>
    )
}
