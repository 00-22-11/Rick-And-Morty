import { FC } from 'react';

import styles from './home.page.module.scss';

export const HomePage: FC = () => (
  <div className={styles.container}>
    <div className={styles.root}>
      <h1 className={styles.heading}>Hello</h1>
      <h2>My name is Artem</h2>
      <span>This is my PDP</span>
      <p className={styles.paragpaph}>
        The technologies I used: <br />
        React
        <br /> React Router Dom v6
        <br /> JS
        <br /> TS
        <br /> MobX
      </p>
    </div>
  </div>
);
