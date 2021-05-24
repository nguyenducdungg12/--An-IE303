import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import client from './client';
import admin from './pages/admin/admin'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin' component={admin}/>
        <Route path='/' component={client}/>
      </Switch>
    </Router>
  );
}

export default App;
