import React from 'react';
import {getCurrentWeather} from '../apis/open-weather-app';


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location: '', 
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
            location: e.target.value
        });
    }

    onFormSubmit(e){
        e.preventDefault();
        
    }

    render(){
        const location = this.state.location;

        return(
            <form onSubmit={(e)=> this.onFormSubmit(e)}>
                <button type= 'submit'>Search</button>
                <input
                 id='search' 
                 name='search' 
                 value={location} 
                 onChange={(e) => this.onInputChange(e)}
                 ></input>
            </form>
        );
    }

}

export default SearchBar;