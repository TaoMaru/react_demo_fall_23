import React, {Component} from 'react';
import axios from 'axios';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            vehicle: {}
        }
    }

    componentDidMount(){
        axios.get('https://random-data-api.com/api/vehicle/random_vehicle')
        .then((response) => {
            this.setState({vehicle: response.data})
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevState)
        console.log(this.state)
    }

    render(){
        const {vehicle} = this.state
        const increment = () => {
            this.setState({count: this.state.count + 1})
        }
        return (
            <React.Fragment>
                <button type="button" className="btn btn-dark" onClick={()=>increment()}>
                    {this.state.count}
                </button>
                <p>{vehicle.make_and_model}</p>
            </React.Fragment>
        )
    }
}

export default Body