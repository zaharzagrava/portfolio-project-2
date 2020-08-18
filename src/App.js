import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Admin from './components/Admin/Admin'

function App() {
  return (
    <>
      <Admin />
{/* 
      <Switch>
        <Route exact path={["/", "/library", "/wishlist", "/category", "/bestsellers", "/cart"]}>
          <div className={styles.wrapper}>
            <Header />
            <LibraryBooks />
            <Slider />
          </div>
          <Footer />
        </Route>
      </Switch> */}
    </>
  );
}

export default App;
