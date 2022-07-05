import { FC } from 'react';

import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { AppRoutes } from '../../../App.router';
import styles from './Header.module.scss';

export const Header: FC = () => (
  <AppBar color="secondary">
    <Toolbar className={styles.toolBar}>
      <NavLink to={AppRoutes.ABOUT} className={styles.linkButton}>
        ABOUT
      </NavLink>
      <NavLink to={AppRoutes.CHARACTERS} className={styles.linkButton}>
        Characters
      </NavLink>
      <NavLink to={AppRoutes.FAVORITES} className={styles.linkButton}>
        Your Favorites
      </NavLink>
    </Toolbar>
  </AppBar>
);
