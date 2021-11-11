import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './index.module.css';

const Person = () => {
  const [active, setActive] = useState(null);
  const [defaultActive, setDefaultActive] = useState(true);
  const { setFilter } = useContext(GlobalContext);

  function handleClick(item) {
    setActive(item);
    setFilter(item);
    setDefaultActive(false);
  }

  return (
    <div className={styles.person}>
      <div className={styles.personHeader}>
        <img width="64px" height="64px" src="./Assets/image-jeremy.png" alt="Jeremy Image" />
        <div className={styles.personTitle}>
          <span>Report for</span>
          <h4>Jeremy Robson</h4>
        </div>
      </div>
      <ul className={styles.personNav}>
        <li className={defaultActive ? styles.active : (active === 'daily' ? styles.active : undefined)} onClick={() => handleClick('daily')}>Daily</li>
        <li className={active === 'weekly' ? styles.active : undefined} onClick={() => handleClick('weekly')}>Weekly</li>
        <li className={active === 'monthly' ? styles.active : undefined} onClick={() => handleClick('monthly')}>Monthly</li>
      </ul>
    </div>
  );
};

export default Person;