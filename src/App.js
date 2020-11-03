import React from 'react';
import './App.scss';
import Nav from './Nav';
import About from './About';
import Register from './Register';
import Login from './Login';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

const Home = () => (
  <div>
    <h1>Welcome to Home Page</h1>
  </div>
   
  
)

export default App;
