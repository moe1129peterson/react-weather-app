import React from 'react'

class CurrentWeather extends React.Component{
    render(){
        const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`
        var d = new Date();
        var currenttime = d.toLocaleTimeString();
        
        return (
            <div className='current-weather'>
                <div className='current-weather-card'>
                    <p className='current-weather-temp'>{currenttime}</p>
                    <p className='current-weather-description'>{this.props.description}</p>
                    <img 
                        className='current-weather-icon' 
                        src={url} alt={this.props.description}/>
                </div>
            </div>
            
        );
    }
}

export default CurrentWeather;