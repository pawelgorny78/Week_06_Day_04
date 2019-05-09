import React, { Component, Fragment } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';

class Main extends Component {


  constructor(props) {
      super(props);
      this.state = {
        pricing: [
          {level: "Hobby", cost: 0},
          {level: "Startup", cost: 10},
          {level: "Enterprise", cost: 100}
        ]
      };
    }


  render() {

    return (
      <Router>
        <Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
         path="/pricing"
         render={() => <Pricing pricing = {this.state.pricing}/>}
         />


        </Fragment>
      </Router>

    );
  }


}

export default Main;
