import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import { CharactersPage, HomePage, UserCollection } from './pages';
import { CharacterInfo } from './shared/components';

export const AppRoutes = {
  HOME: '/',
  CHARACTERS: '/characters',
  COLLECTION: '/collection'
};

export const AppRouter: FC = () => (
  <Routes>
    <Route path={AppRoutes.HOME} element={<HomePage />} />
    <Route path={AppRoutes.CHARACTERS} element={<CharactersPage />} />
    <Route path={`${AppRoutes.CHARACTERS}/:charId`} element={<CharacterInfo />} />
    <Route path={AppRoutes.COLLECTION} element={<UserCollection />} />
  </Routes>
);
