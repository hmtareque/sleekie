import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from '../components/layouts/layout.component';

import PrivateLayout from '../layouts/private.layout';


// tables 
import SimpleTable from '../views/tables/simple.table';
import EnhancedTable from '../views/tables/enhanced.table';
import DenseTable from '../views/tables/dense.table';
import FixHeadTable from '../views/tables/fix-head.table';
import MaterialTable from '../views/tables/material.table';

const TableRoutes = () => {
  return (
    <Switch>
  

<RouteWithLayout title="Simple" component={SimpleTable} exact layout={PrivateLayout} path="/tables/simple" />
<RouteWithLayout title="Enhanced" component={EnhancedTable} exact layout={PrivateLayout} path="/tables/enhanced" />
<RouteWithLayout title="Dense" component={DenseTable} exact layout={PrivateLayout} path="/tables/dense" />
<RouteWithLayout title="Fixed Head" component={FixHeadTable} exact layout={PrivateLayout} path="/tables/fix-head" />
<RouteWithLayout title="Material" component={MaterialTable} exact layout={PrivateLayout} path="/tables/material" />




      
    </Switch>
  );
};

export default TableRoutes;
