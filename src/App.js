import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Admin from './components/Admin/Admin'
import Register from './components/Register/Register';

function App() {
  return (
    <>

      <Switch>
        <Route exact path={["/"]}>
          <Register />
        </Route>
        <Route exact path={["/admin"]}>
          <Admin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
