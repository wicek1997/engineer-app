import React from 'react';
import {Layout} from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Home, Register, Login} from './pages';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
