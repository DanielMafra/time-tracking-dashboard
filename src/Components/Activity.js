import React from 'react';
import styles from './Activity.module.css';

const Activity = () => {
  return (
    <div className={`${styles.activity} ${styles.work}`}>
      <img src="./Assets/icon-work.svg" alt="" />
      <div className={styles.activityContent}>
        <div className={styles.now}>
          <span>Work</span>
          <span>32hrs</span>
        </div>
        <div className={styles.old}>
          <img src="./Assets/icon-ellipsis.svg" alt="Options" />
          <span>Last Week - 36hrs</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;