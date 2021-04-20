import { Spinner } from "reactstrap"

import './Loading.scss';

const LoadingPage = () => (
  <div className="page page-loading">
    <div className="loader">
      <Spinner 
        color="info"
      />
    </div>
  </div>
);

export default LoadingPage;