import React from 'react';
import './Intro.css';

class Intro extends React.Component {
	render() {
        return (
            <div class="intro">
                <h1>Welcome to my Space X React build.</h1>
                <p>This was my first attempt at interacting an API to populate a React frontend.</p>
                <a href="https://docs.spacexdata.com/?version=latest">https://docs.spacexdata.com/?version=latest</a>
            </div>
        )
	}
};

export default Intro