import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './index.module.css';

const Activity = ({ title, currentTime, previousTime }) => {
  const { type, animation } = useContext(GlobalContext);

  return (
    <div className={`${styles.activity} ${styles[title.toLowerCase().replace(" ", "")]}`}>
      <img src={`./Assets/icon-${title.toLowerCase().replace(" ", "-")}.svg`} alt="" />
      <div className={styles.activityContent}>
        <img src="./Assets/icon-ellipsis.svg" alt="Options" />
        <div className={styles.now}>
          <span>{title}</span>
          <span className={animation ? styles.animaValues : undefined}>{currentTime}{currentTime > 1 ? "hrs" : "hr"}</span>
        </div>
        <div className={`${styles.old} ${animation ? styles.animaValues : undefined}`}>
          <span>Last {type} - {previousTime}{previousTime > 1 ? "hrs" : "hr"}</span>
        </div>
      </div>
    </div>
  );
};

export default Activity;