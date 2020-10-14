import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import {
    Home,
    SignIn,
}from './pages';


export const Routing = () => (    
<Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/SignIn">
      <SignIn />
    </Route>
</Switch>
)