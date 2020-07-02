import React from 'react';
import './Header.css';
import '/public/SpaceX-Logo.svg'
import {Link} from 'react-router-dom'


class Header extends React.Component {
	render() {
        return (
            <Link to="/">
                <div class="header">
                    <img class="spaceXLogo" src="SpaceX-Logo.svg" alt="Space X"/>
                </div>
            </Link>
        )
	}
};

export default Header