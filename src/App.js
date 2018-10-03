import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './containers/Home';
import About from './containers/About';
import Crafts from './containers/Crafts';
import Lessons from './containers/Lessons';
import Products from './containers/Products';

import Navbar from './components/navbar';

const App = () => (
  <Router>
    <div>
    <Navbar/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/crafts" component={Crafts} />
      <Route path="/koreanLessons" component={Lessons} />
      <Route path="/products" component={Products} />
    </div>
  </Router>

);

export default App;