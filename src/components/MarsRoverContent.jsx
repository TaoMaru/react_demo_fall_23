import React, {Component} from 'react';
import axios from 'axios';

class MarsRoverContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            marsRover: "",
            imgSrc: "",
            landingDate: ""
        }
    }

    componentDidMount(){
        const today = new Date();
        const yesterday =  new Date(today.setDate(-1));
        const formattedDate = yesterday.toISOString().split('T')[0];
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedDate}&api_key=V6c5pm6c6Z9BecTGTaRangJbafg95NP2Oy75ieAE`)
        .then((response) => {
            this.setState({marsRover: response.data.photos[0].rover.name})
            this.setState({imgSrc: response.data.photos[0].img_src})
            this.setState({landingDate: response.data.phot0s[0]}.rover.landing_date)
            console.log(response.data.photos);
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
        const {marsRover} = this.state
        const {imgSrc} = this.state
        const {landingDate} = this.state
        return (
            <div className="apod-content d-flex justify-content-center py-5">
               <div className="card apod-card">
                    <img src={imgSrc} alt={imgSrc} className="nasaAPOD-img card-img-top"/>
                    <div className="apod-copyright card-body px-3">
                       <p className="card-text">Taken by: {marsRover}</p>
                       <p className="card-text">Landing date: {landingDate}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MarsRoverContent
