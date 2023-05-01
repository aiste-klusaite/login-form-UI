import React from 'react';

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

interface Props {
    title: string;
    message: string;
    onConfirm: () => void;
}

const ErrorModal = ({title, message, onConfirm}: Props) => {
    return (<div>
            <div className={styles.backdrop} onClick={onConfirm}>
                <Card className={styles.modal}>
                    <header className={styles.header}>
                        <h2>{title}</h2>
                    </header>
                    <div className={styles.content}>
                        <p>{message}</p>
                    </div>
                    <footer className={styles.actions}>
                        <Button type='button' onClick={onConfirm}>Okay</Button>
                    </footer>
                </Card>
            </div>
        </div>
    )
};

export default ErrorModal;