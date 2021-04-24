import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutPage from '../main/pages/about/about';
import HomePage from '../main/pages/home/home';

const PublicRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/about'>
                    <AboutPage />
                </Route>
                <Route path='/'>
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default PublicRouter;