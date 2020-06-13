import React from 'react';
import './Header.css';
import '/public/SpaceX-Logo.svg'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
        return (
            <div class="header">
                <img class="spaceXLogo" src="SpaceX-Logo.svg" alt="Space X"/>
            </div>
        )
	}
};

export default Header