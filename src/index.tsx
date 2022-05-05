import React from 'react';
import styles from './styles/styles.css';

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => (
  <div className={styles.test}>
    Example Component:
    {text}
  </div>
);
