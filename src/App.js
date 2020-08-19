import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Admin from './components/Admin/Admin'
import Register from './components/Register/Register';
import ClientMain from './components/ClientMain/ClientMain';

import { Card } from "@material-ui/core";

function App() {
  return (
    <>

      <Switch>
        <Route exact path={["/"]}>
          <Register />
        </Route>
        <Route exact path={["/admin"]}>
        <Card>  <ClientMain  /> </Card>
        </Route>
      </Switch>
    </>
  );
}

export default App;
