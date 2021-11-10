import React, { useState } from 'react';
import styles from './Person.module.css';

const Person = () => {
  const [active, setActive] = useState(null);
  const [defaultActive, setDefaultActive] = useState(true);

  function handleClick(item) {
    setActive(item);
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
        <li className={defaultActive ? styles.active : (active === 'd' ? styles.active : false)} onClick={() => handleClick('d')}>Daily</li>
        <li className={active === 'w' ? styles.active : false} onClick={() => handleClick('w')}>Weekly</li>
        <li className={active === 'm' ? styles.active : false} onClick={() => handleClick('m')}>Monthly</li>
      </ul>
    </div>
  );
};

export default Person;