import { User } from '../../model/User';

import React from 'react';
import Card from '../UI/Card';
import styles from './UserList.module.css';

interface Props {
    users: User[];
}

const UserList = ({users}: Props) => {
    return (
        <Card className={styles.users}>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;