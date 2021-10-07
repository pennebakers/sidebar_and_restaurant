import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Navbar/Navbar'

import Beers from './pages/Beers'
import Booze from './pages/Booze'
import Cocktails from './pages/Cocktails'
import Home from './pages/Home'
import Specials from './pages/Specials'
import Wine from './pages/Wine'

export default function App() {
  return(
    <div className="container">
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Beers" component={Beers} />
            <Route path="/Cocktails" component={Cocktails} />
            <Route path="/Wine" component={Wine} />
            <Route path="/Booze" component={Booze} />
            <Route path="/Specials" component={Specials} />
          </Switch>
      </Router>
    </div>
  )
}