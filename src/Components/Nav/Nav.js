import React from 'react';
import RocketsLoader from './RocketsLoader/RocketsLoader';
import MissionsLoader from './MissionsLoader/MissionsLoader';
import RoadsterLoader from './RoadsterLoader/RoadsterLoader';
import ShipsLoader from './ShipsLoader/ShipsLoader';
import './Nav.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
        return (
            <Router>
                <div>
                    <div class="buttonsContainer">
                        <Link to="/rockets"><button class="rocketButton">Rockets</button></Link>
                        <Link to="/missions"><button class="missionButton">Missions</button></Link>
                        <Link to="/roadster"><button class="roadsterButton">Roadster</button></Link>
                        <Link to="/ships"><button class="shipsButton">Ships</button></Link>
                    </div>
                    <div>
                        <Route path="/rockets" component={ RocketsLoader } />
                        <Route path="/missions" component={ MissionsLoader } />
                        <Route path="/roadster" component={ RoadsterLoader } />
                        <Route path="/ships" component={ ShipsLoader } />
                    </div>
                </div>
            </Router>
        )
	}
};

export default Nav