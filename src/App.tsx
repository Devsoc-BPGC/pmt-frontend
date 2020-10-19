import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Dashboard/Home';
import Project from './components/Projects/Project';
import Tasks from './components/Taskboard/Tasks';
import Profile from './components/Profile/Profile';
import Calendar from './components/Calendar/Calendar';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/calendar' component={Calendar} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/project/:id/taskboard' component={Tasks} />
      </Switch>
    </Router>
  );
}

export default App;
