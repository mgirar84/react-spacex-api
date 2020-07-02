import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
	render() {
        return (
            <div>
                <div class="buttonsContainer">
                    <Link to="/rockets"><button class="navButton rocketButton">Rockets</button></Link>
                    <Link to="/missions"><button class="navButton missionButton">Missions</button></Link>
                    <Link to="/roadster"><button class="navButton roadsterButton">Roadster</button></Link>
                    <Link to="/ships"><button class="navButton shipsButton">Ships</button></Link>
                </div>
            </div>
        )
	}
};

export default Nav