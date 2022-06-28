import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/home';

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);
