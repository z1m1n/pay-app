import { FC } from 'react';
import Header from 'components/layout/Header';

const MainLayout: FC = ({ children }) => (
  <div className="app app-layout-main">
    <Header />
    <div className="container app-content">
      {children}
    </div>
  </div>
);

export default MainLayout;