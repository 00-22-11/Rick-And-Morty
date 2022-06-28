import { FC, ReactNode } from 'react';

import { Header } from '../shared/components';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
