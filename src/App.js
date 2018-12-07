import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from "./components/Navbar";
import {Container,} from "semantic-ui-react"
import Flashes from "./components/Flashes"

const App = () => (
  <Fragment>
    <Navbar />
    <Container style={{ paddingTop:"25px"}} textAlign="center">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/flashcards" component={Flashes} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;