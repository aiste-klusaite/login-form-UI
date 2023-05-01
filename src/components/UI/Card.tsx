 import React, { PropsWithChildren } from 'react';

 import styles from './Card.module.css';

 interface Props {
    children: React.ReactNode;
    className: string;
 }
 
const Card = ({children, className}: Props) => {
    return <div className={`${styles.card} ${className}`}>{children}</div>
 }

 export default Card;