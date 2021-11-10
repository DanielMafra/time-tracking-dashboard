import React from 'react';
import styles from './Home.module.css';
import Person from './Person';
import Activity from './Activity';

const Home = () => {
  return (
    <div className={styles.container}>
      <Person />
      <div className={styles.activities}>
        <Activity />
      </div>
    </div>
  );
};

export default Home;