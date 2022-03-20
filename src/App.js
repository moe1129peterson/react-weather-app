import logo from './logo.svg';
import './App.css';
import SearchBar from './components/searchBar'
import CurrentWeather from './components/current-weather';
import {getCurrentWeather} from './apis/open-weather-app';
import React from 'react';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location: '',
            temp: ''
        }; 

        // getCurrentWeather('Tokyo').then((res)=> {
        //     console.log('res', res);
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

    onFormSubmit(){
        getCurrentWeather(this.state.location)
        .then((res) =>{
          this.setState({
              temp: res.data.main.temp,
          });

        });
        
    }


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
                        currentTemp={this.state.temp}
                    />
                </header>
            </div>
        );
    }
}

export default App;

