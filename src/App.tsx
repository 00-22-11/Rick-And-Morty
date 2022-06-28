import { FC } from 'react';

import { AppRouter } from './App.router';
import { Layout } from './layout';

export const App: FC = () => (
  <Layout>
    <AppRouter />
  </Layout>
);
