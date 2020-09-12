import React from 'react';
import { Router } from "react-router-dom";
import { Route } from "react-router";

import NavbarComponent from './components/layouts/navbar';
import {Container} from 'react-bootstrap';
import {LoginContainer, RegisterContainer} from './containers/auth';
import history from "./helpers/history";

function App() {

  return (
    <Container>
      <Router history={history}>
      <NavbarComponent />
        <Route exact path="/" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
      </Router>
    </Container>   
  )
};

export default App;
