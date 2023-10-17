import React, {Component} from 'react';
import axios from 'axios';

class APODContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            nasaAPOD: {}
        }
    }

    componentDidMount(){
        axios.get('https://api.nasa.gov/planetary/apod?api_key=V6c5pm6c6Z9BecTGTaRangJbafg95NP2Oy75ieAE')
        .then((response) => {
            this.setState({nasaAPOD: response.data})
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
        const {nasaAPOD} = this.state
        return (
            <div className="apod-content d-flex justify-content-center py-5">
               <div className="card apod-card">
                    <img src={nasaAPOD.url} alt={nasaAPOD.explanation} className="nasaAPOD-img card-img-top"/>
                    <div className="apod-copyright card-body px-3">
                        <p className="card-text">Taken by: {nasaAPOD.copyright}</p>
                        <p className="card-text">Date: {nasaAPOD.date}</p>
                        <p>{nasaAPOD.explanation}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default APODContent
