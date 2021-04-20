import { FC } from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

import './Block.scss';

const BlockLayout: FC = ({ children }) => (
  <div className="app app-layout-block">
    <Header />
    <div className="container app-content">
      <div className="app-content-box">
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

export default BlockLayout;