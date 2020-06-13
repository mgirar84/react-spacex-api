import React from 'react';
import RoadsterCard from './RoadsterCard/RoadsterCard';

class RoadsterLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        roadster:{
            flickr_images:[]
        }
        }

        //populates rockets with data from api to create an array of objects
        this.RoadsterLoader()
    }

    RoadsterLoader = () => {
        fetch('https://api.spacexdata.com/v3/roadster')
        .then(data => data.json())
            .then((data) => {
                this.setState({
                    roadster: data,
                })
            })
    }

    render() {
        return (
        <div>
            <RoadsterCard roadster={this.state.roadster}/>
        </div>
        )
    }
}

export default RoadsterLoader