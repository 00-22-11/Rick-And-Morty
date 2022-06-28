import { FC } from 'react';

import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

export const Header: FC = () => (
  <AppBar color="secondary">
    <Toolbar className={styles.toolBar}>
      <NavLink to={'/'} className={styles.linkButton}>
        ABOUT ME
      </NavLink>
      <NavLink className={styles.linkButton} to={'/'}>
        Characters{' '}
      </NavLink>
    </Toolbar>
  </AppBar>
);
