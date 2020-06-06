import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import auth from '../auth';

const ProtectedRoute = props => {
    const { layout: Layout, component: Component, title, ...rest } = props;

    return (
        <Route {...rest} render={
            (props) => {
                if (auth.isAuthenticated()) {
                    return <Layout>
                        <Component title={title} {...props} />
                    </Layout>;
                } else {
                    return <Redirect to={
                        {
                            pathnanme: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }
        } />
    );
}

ProtectedRoute.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
}

export default ProtectedRoute;
