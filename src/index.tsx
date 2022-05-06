import React from 'react';
import styles from './styles/styles.css';

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props): JSX.Element => (
  <div className={styles.test}>
    Something Worked Chagne : {text} this is a longer line longer lin this
    linesdfgdfgfdgfdg this iiiig code ofoof is too long ifnisndinfjsidfji
  </div>
);
