import { FC } from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

const MainLayout: FC = ({ children }) => (
  <div className="app app-layout-main">
    <Header />
    <div className="container app-content">
      {children}
    </div>
    <Footer />
  </div>
);

export default MainLayout;