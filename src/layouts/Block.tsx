import { FC } from 'react';
import Header from 'components/layout/Header';

import './Block.scss';

const BlockLayout: FC = ({ children }) => (
  <div className="app app-layout-block">
    <Header />
    <div className="container app-content">
      <div className="app-content-box">
        {children}
      </div>
    </div>
  </div>
);

export default BlockLayout;