import React from 'react'

class CurrentWeather extends React.Component{
    render(){
        return (
            <div className='current-weather'>
                <div className='current-weather-card'>
                    <p className='current-weather-temp'>{this.props.currentTemp}</p>
                    <p className='current-weather-description'>Sunny!</p>
                </div>
            </div>
        );
    }
}

export default CurrentWeather;