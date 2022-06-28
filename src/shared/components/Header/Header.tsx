import { FC } from 'react';

import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { AppRoutes } from '../../../App.router';
import styles from './Header.module.scss';

export const Header: FC = () => (
  <AppBar color="secondary">
    <Toolbar className={styles.toolBar}>
      <NavLink to={AppRoutes.HOME} className={styles.linkButton}>
        ABOUT ME
      </NavLink>
      <NavLink to={AppRoutes.CHARACTERS} className={styles.linkButton}>
        Characters
      </NavLink>
    </Toolbar>
  </AppBar>
);
