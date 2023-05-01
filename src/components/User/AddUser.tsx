import React, { useState } from 'react';

import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

interface Props {
    onAddUser: (name: string, age: string) => void;
}

const AddUser = ({onAddUser}: Props) => {
    const [enteredUserState, setEnteredUserState] = useState({
        userName: '',
        userAge: ''
    });

    const [error, setError] = useState<any>();

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (enteredUserState.userName.trim().length === 0 || enteredUserState.userAge.trim().length === 0 ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valif name and age (non-empty values)',
            });

            return;
        }

        if (+enteredUserState.userAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)',
            });

            return;
        }

        onAddUser(enteredUserState.userName, enteredUserState.userAge);
        setEnteredUserState({
            userName: '',
            userAge: ''
        })
    }

    const userStateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredUserState({
            ...enteredUserState,
            [event.target.name]: event.target.value
        })
    }

    const ErrorHandler = () => {
        setError(null);
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id="username" name="userName" value={enteredUserState.userName} type="text" onChange={userStateChangeHandler}/>
                    <label htmlFor="age" >Age (Years)</label>
                    <input id="age" name="userAge" value={enteredUserState.userAge} type="number" onChange={userStateChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    )
}

export default AddUser;
