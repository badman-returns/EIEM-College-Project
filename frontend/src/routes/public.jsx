import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../main/components/footer/footer';
import Header from '../main/components/header/header';
import AboutPage from '../main/pages/about/about';
import HomePage from '../main/pages/home/home';
import Login from '../admin/pages/login/login';

const PublicRouter = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path='/about'>
                    <AboutPage />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/'>
                    <HomePage />
                </Route>
            </Switch>
            <Footer />
        </>
    )
}

export default PublicRouter;