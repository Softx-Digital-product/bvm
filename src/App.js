
import './App.css';

// import { BrowserRouter, Route, Link } from "react-router-dom";

import About from './Components/About';
import Header from './Components/Header';
import  Home from './Components/Home';
import Team from './Components/Team';
import Work from './Components/Work';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
    <Switch>
          <Route path="/about">
            <Header/>
            <About />
          </Route>
          <Route path="/team">
          <Header/>
            <Team/>
          </Route>
          <Route path="/team">
          <Header/>
            <Team/>
          </Route>
        
          <Route path="/services">
          <Header/>
        <Work/>
          </Route>
          <Route path="/portfolio">
          <Header/>
        <Portfolio/>
          </Route>
          <Route path="/contact">
          <Header/>
        <Contact/>
          </Route>

          <Route path="/">
          <Header/>
            <Home />
          </Route>
        </Switch>
  </Router>
  );
}

export default App;
