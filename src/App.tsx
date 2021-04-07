/** @format */

import { Provider } from 'react-redux';
import './App.css';
import React from 'react';
import { appStore } from './common/store/app-store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './common/components/Navbar';
import { Index } from './pages/Index';
import Accounts from './pages/Accounts';
import Admin from './pages/Admin';

const App: React.FC = () => (
  <Provider store={appStore}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route render={() => <Index />} path='/' exact />
        <Route render={() => <Accounts />} path='/accounts' />
        <Route render={() => <Admin />} path='/admin' />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
