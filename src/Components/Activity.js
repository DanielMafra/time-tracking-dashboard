import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
import styles from './Activity.module.css';

const Activity = ({ title, currentTime, previousTime }) => {
  const { type } = useContext(GlobalContext);

  return (
    <div className={`${styles.activity} ${styles[title.toLowerCase().replace(" ", "")]}`}>
      <img src={`./Assets/icon-${title.toLowerCase().replace(" ", "-")}.svg`} alt="" />
      <div className={styles.activityContent}>
        <div className={styles.now}>
          <span>{title}</span>
          <span>{currentTime}{currentTime > 1 ? "hrs" : "hr"}</span>
        </div>
        <div className={styles.old}>
          <img src="./Assets/icon-ellipsis.svg" alt="Options" />
          <span>Last {type} - {previousTime}{previousTime > 1 ? "hrs" : "hr"}</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;