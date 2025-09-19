import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import React from 'react';
import CheckIcon from './check.svg';

export const Advantages = ({ advantages }: AdvantagesProps): React.ReactElement => {
  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon className={styles.icon} />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};