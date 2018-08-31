import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Home from './containers/pages/Home';
// // import Employee from './containers/management/employee';
// import Borrow from './containers/management/borrow';
// import Payback from './containers/management/payback';
// import Balance from './containers/management/balance';
// import PageNotFound from './containers/NotFound';

const Routes = () => (
  <Route exact path="/" component={Home} />
);

export default Routes;