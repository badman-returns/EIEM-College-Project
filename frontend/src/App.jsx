import React from 'react';
import { HashRouter, Route, Switch, } from 'react-router-dom';
import Login from './admin/pages/login/login';
import AdminRouter from './routes/admin';
import PublicRouter from './routes/public';

const App= () => {
  return (
    <HashRouter>
      <Switch>

        {/* Public Routes */}
        <Route exact path='/'>
          <PublicRouter />
        </Route>


        {/* Login Routes */}
        <Route exact path='/super-admin/login'>
          <Login />
        </Route>

        {/* Admin Routes */}
        <Route path='/admin'>
          <AdminRouter />
        </Route>


      </Switch>
    </HashRouter>
  );
}

export default App;
