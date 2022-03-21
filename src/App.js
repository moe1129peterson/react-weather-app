import React from 'react';

import './App.css';

import SearchBar from './components/searchBar'
import CurrentWeather from './components/current-weather';
import Forecast from './components/forecast-weather';

import {getCurrentWeather,getForecast} from './apis/open-weather-app';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dt:'',
            location: '',
            temp: '',
            description: '',
            icon: '',
            dailyForecast: []
        }; 

        // getCurrentWeather('Tokyo').then((weatherRes)=> {
        //     console.log('weatherRes', weatherRes);
        // })

        // setInterval(()=>{
        //     this.setState({
        //         location:'my new value'
        //     })
        // }, 1000)

    }

    onInputChange(e){
        this.setState({
            location: e.target.value,
        });
    }

    async onFormSubmit(){
      const weatherRes = await getCurrentWeather(this.state.location)
      const lat = weatherRes.data.coord.lat;
      const lon = weatherRes.data.coord.lon;
      const forecastRes= await getForecast(lat,lon);

      this.setState({
        dt: weatherRes.data.dt,
        temp: weatherRes.data.main.temp,
        description: weatherRes.data.weather[0].main,
        icon: weatherRes.data.weather[0].icon,
        dailyForecast: forecastRes.data.daily
      });

    };
        



        //   this.setState({
        //       temp: weatherRes.data.main.temp,
        //       description: weatherRes.data.weather[0].main,
        //       icon: weatherRes.data.weather[0].icon
        //   });

    


    render(){
        return(
            <div className='App'>
                <header className='App-header'>
                    <SearchBar 
                        location={this.state.location} 
                        inputChange={(e)=> this.onInputChange(e)}
                        formSubmitted={()=> this.onFormSubmit()}
                    />
                    <CurrentWeather 
                        currentDate={this.state.dt}
                        currentTemp={this.state.temp}
                        description={this.state.description}
                        icon={this.state.icon}
                    />
                    <Forecast forecast={this.state.dailyForecast}/>
                </header>
            </div>
        );
    }
}

export default App;

