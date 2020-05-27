import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './layouts/layout.component';

import PrivateLayout from './layouts/private/private.layout';
import PublicLayout from './layouts/public/public.layout';

import Dashboard from './views/dashboard.view';
import Customers from './views/customers.view';
import SignupForm from './views/form.view';
import RecipeReviewCard from './views/test.view';

import SignIn from './views/auth/sign-in.view';
import ForgotPassword from './views/auth/reset-password.view';

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


      <RouteWithLayout
        title="Sign In"
        component={SignIn}
        exact
        layout={PublicLayout}
        path="/login"
      />

      <RouteWithLayout
        title="Forgot Password"
        component={ForgotPassword}
        exact
        layout={PublicLayout}
        path="/reset-password"
      />

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
