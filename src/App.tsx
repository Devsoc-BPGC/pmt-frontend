import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Dashboard/Home';
import Project from './components/Projects/Project';
import Tasks from './components/Taskboard/Tasks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/:slug' component={Project} />
        <Route exact path='/:slug/:id/taskboard' component={Tasks} />
      </Switch>
    </Router>
  );
}

export default App;
