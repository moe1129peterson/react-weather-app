import React from 'react'

class Forecast extends React.Component{
    render() {
      const forecastCards = this.props.forecast.map((f) => {
        const url = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
        const date = new Date (f.dt*1000).toDateString();
        return(
            <div className='forecast-card'>-----
                <p className='forecast-daily'>{date}</p>
                <p className='forecast-temp'>{f.temp.day}</p>
                <img src={url} alt={f.weather[0].icon} />
                <p className='forecast-description'>{f.weather[0].main}</p>
            </div>
    
        )
      });
        
      return<div className='forecast'>{forecastCards}</div>;
    }
}

export default Forecast; 