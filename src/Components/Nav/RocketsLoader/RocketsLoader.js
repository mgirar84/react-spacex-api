import React from 'react';
import RocketCard from './RocketCard/RocketCard';

class RocketsLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        rockets:[]
        }

        //populates rockets with data from api to create an array of objects
        this.RocketsLoader()
    }

    RocketsLoader = () => {
        fetch('https://api.spacexdata.com/v3/rockets')
        .then(data => data.json())
            .then((data) => {
                this.setState({
                    rockets: data,
                })
            })
    }

    render() {
        return (
        <div>
            <RocketCard rockets={this.state.rockets}/>
        </div>
        )
    }
}

export default RocketsLoader