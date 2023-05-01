import React, { useState, useRef, MutableRefObject} from 'react';

import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../../Helpers/Wrapper';

interface Props {
    onAddUser: (name: string, age: string) => void;
}

// MANAGE INPUT VALUE WITH useREf() hook
const AddUser = ({onAddUser}: Props) => {
    const nameInputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const ageInputRef = useRef() as MutableRefObject<HTMLInputElement> ;

    const [error, setError] = useState<any>();

    const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0 ) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valif name and age (non-empty values)',
            });

            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0)',
            });

            return;
        }

        onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const ErrorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age" >Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;
