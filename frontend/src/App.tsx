import React from 'react';
import { HashRouter, Route, Switch, } from 'react-router-dom';
import PublicRouter from './routes/public';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        {/* Login Routes */}
        <Route exact path='/admin/login'>

        </Route>

        {/* Admin Routes */}
        <Route path='/admin'>
        </Route>

        {/* Public Routes */}
        <Route path='/'>
          <PublicRouter />
        </Route>

      </Switch>
    </HashRouter>
  );
}

export default App;
