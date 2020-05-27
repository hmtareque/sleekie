import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './layouts/layout.component';

import PrivateLayout from './layouts/private/private.layout';

import Dashboard from './views/dashboard.view';
import Customers from './views/customers.view';
import SignupForm from './views/form.view';
import RecipeReviewCard from './views/test.view';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
      title="Dashboard"
        component={Dashboard}
        exact
        layout={PrivateLayout}
        path="/dashboard"
      />
      <RouteWithLayout
      title="Customers"
        component={Customers}
        exact
        layout={PrivateLayout}
        path="/customers"
      />
      <RouteWithLayout
      title="Sign Up Form"
        component={SignupForm}
        exact
        layout={PrivateLayout}
        path="/form"
      />
      <RouteWithLayout
        title="Card"
        component={RecipeReviewCard}
        exact
        layout={PrivateLayout}
        path="/card"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
