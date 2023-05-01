import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

interface Props {
    title?: string;
    message?: string;
    onConfirm?: () => void;
}

const Backdrop = ({onConfirm}: Props) => {
    return <div className={styles.backdrop} onClick={onConfirm}></div>
};

const ModalOverlay = ({title, message, onConfirm}: Props) => {
    return (
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
    )
}

const ErrorModal = ({title, message, onConfirm}: Props) => {
    const portalDivBackdrop = document.getElementById('backdrop-root')!;
    const portalDivModalOverlay = document.getElementById('modal-root')!;

    // CREATING PORTAL
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={onConfirm} />, portalDivBackdrop,)}
            {ReactDOM.createPortal(
                <ModalOverlay 
                    title={title} 
                    message={message} 
                    onConfirm={onConfirm}/>, portalDivModalOverlay
            )}
        </React.Fragment>
    )
};

export default ErrorModal;