import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = props => {
  const {layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component title={title} {...matchProps} />
        </Layout>
      )}
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default ProtectedRoute;