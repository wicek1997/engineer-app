import React from 'react';
import { 
  BrowserRouter as Router,
} from "react-router-dom";
import { Nav } from './components';
import { 
  Routing,
   } from './Routing';

   
function App()
{
  return (
  <Router>
      <Nav />
      <Routing />
  </Router>
  );
}
export default App;
