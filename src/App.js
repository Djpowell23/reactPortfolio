import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
