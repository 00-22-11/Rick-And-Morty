import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import { CharactersPage, HomePage, UserCollection } from './pages';
import { CharacterInfo } from './shared/components';

export const AppRoutes = {
  ABOUT: '/',
  CHARACTERS: '/characters',
  FAVORITES: '/farvorites'
};

export const AppRouter: FC = () => (
  <Routes>
    <Route path={AppRoutes.ABOUT} element={<HomePage />} />
    <Route path={AppRoutes.CHARACTERS} element={<CharactersPage />} />
    <Route path={`${AppRoutes.CHARACTERS}/:charId`} element={<CharacterInfo />} />
    <Route path={AppRoutes.FAVORITES} element={<UserCollection />} />
  </Routes>
);
