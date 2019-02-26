import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from '../routes';

const Root = ({ store }) =>
    <Provider store={ store }>
        <AppRoutes />
    </Provider>;

export default Root;