import React, {FunctionComponent, ReactElement} from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';

import Home from './components/layout/Home';
import Projects from './components/layout/projects/Projects';
import About from './components/layout/about/About';
import NoMatch from './components/layout/nomatch/NoMatch';
import Container from './components/layout/container/Container';

import './style/App.scss';

const App: FunctionComponent = (): ReactElement => (
  <Router history={createBrowserHistory()}>
    <Container>
      <Switch>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/projects"
            component={Projects}
          />
          <Route
            exact
            path="/about"
            component={About}
          />
          <Route
            component={NoMatch}
          />
      </Switch>
    </Container>
  </Router>
);

export default App;
