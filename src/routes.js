import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './pages/home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;