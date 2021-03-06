import React, { useContext } from 'react';
import styles from './Home.module.css';
import { GlobalContext } from '../Contexts/GlobalContext';
import Person from './Person/index';
import Activity from './Activity/index';

const Home = () => {
  const { data, filter } = useContext(GlobalContext);

  return (
    <div className={styles.container}>
      <Person />
      <div className={styles.activities}>
        {data ? data.map((activity, i) => {
          return <Activity title={activity.title} currentTime={activity.timeframes[filter].current} previousTime={activity.timeframes[filter].previous} key={i} />
        }) : ''}
      </div>
    </div>
  );
};

export default Home;