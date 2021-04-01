import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import Routes from './components/routing/Routes';
import setAuthToken from './utils/setAuthToken';
//Redux
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
// React and redux are separate things. 'react-redux' will combine them to do this we have to enclose/rapp our code with {Provider} wich is our componet from 'react-redux'
import store from './store';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  /**
   * useEffect always called if the state is updated
   * if we add a second parameter array of options [] it updated base on the option
   * if the second param is just [] it will only be called once
   */
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
