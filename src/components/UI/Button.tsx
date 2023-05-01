import React from 'react';

import styles from './Button.module.css';

interface Props {
    type: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    children: React.ReactNode;
}

const Button = ({type, onClick, children}: Props) => {
    return <button className={styles.button} type={type} onClick={onClick}>{children}</button>
};

export default Button;