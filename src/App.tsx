import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import TaskBoard from './components/TaskBoard';
import Tasks from './components/Tasks';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/taskboards' component={TaskBoard} />
        <Route exact path='/taskboards/:id/tasks' component={Tasks} />
      </Switch>
    </Router>
  );
}

export default App;
