import React, {Component} from 'react';
import axios from 'axios';

class EPICContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            nasaEPIC: {}
        }
    }

    componentDidMount(){
        const today = new Date();
        const yesterday =  new Date(today.setDate(-1));
        const formattedDate = yesterday.toISOString().split('T')[0];
        console.log(yesterday)
        console.log(formattedDate)
        axios.get(`https://api.nasa.gov/EPIC/api/natural/date/${formattedDate}?api_key=V6c5pm6c6Z9BecTGTaRangJbafg95NP2Oy75ieAE`)
        .then((response) => {
            this.setState({nasaEPIC: response.data[0]})
            console.log(response.data[0]);
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
        const {nasaEPIC} = this.state
        return (
            <div className="apod-content d-flex justify-content-center py-5">
               <div className="card apod-card">
                    <img src={nasaEPIC.image} alt={nasaEPIC.caption} className="nasaAPOD-img card-img-top"/>
                    <div className="apod-copyright card-body px-3">
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default EPICContent
