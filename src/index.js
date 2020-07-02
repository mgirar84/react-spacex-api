import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import './index.css';
import RocketsLoader from './Components/Nav/RocketsLoader/RocketsLoader';
import MissionsLoader from './Components/Nav/MissionsLoader/MissionsLoader';
import RoadsterLoader from './Components/Nav/RoadsterLoader/RoadsterLoader';
import ShipsLoader from './Components/Nav/ShipsLoader/ShipsLoader';
import Intro from './Components/Nav/Intro/Intro'

import * as serviceWorker from './serviceWorker';
import App from './App';

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/react-spacex-api" component={ App } />
          <Switch>
            <Route path="/rockets" component={ RocketsLoader } />
            <Route path="/missions" component={ MissionsLoader } />
            <Route path="/roadster" component={ RoadsterLoader } />
            <Route path="/ships" component={ ShipsLoader } />
            <Route path="/react-spacex-api" component={ Intro } />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
    <Routing />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
