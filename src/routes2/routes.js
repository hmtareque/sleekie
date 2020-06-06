import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import PrimaryRoutes from './primary.routes';
import TableRoutes from './table.routes';

const browserHistory = createBrowserHistory();

const Routes = () => {
    return (
          <Router history={browserHistory}>
           {/* <PrimaryRoutes /> */}
           <TableRoutes />

          </Router>
    );
  }

export default Routes;

