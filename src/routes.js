import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './layouts/layout.component';

import PrivateLayout from './layouts/private/private.layout';

import Dashboard from './views/dashboard.view';
import Customers from './views/customers.view';
import SignupForm from './views/form.view';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={PrivateLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={Customers}
        exact
        layout={PrivateLayout}
        path="/customers"
      />
      <RouteWithLayout
        component={SignupForm}
        exact
        layout={PrivateLayout}
        path="/form"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
