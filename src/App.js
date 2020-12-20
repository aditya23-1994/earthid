import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import SolutionPage from './pages/solutionpage/solutionpage.component';
import ResourcesPage from './pages/resourcespage/resources.component';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/solution' component={SolutionPage} />
      <Route path='/resources' component={ResourcesPage} />
    </Switch>
  );
}

export default App;
