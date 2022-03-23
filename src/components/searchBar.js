import React from 'react';
import {getCurrentWeather} from '../apis/open-weather-app';
import classes from './searchBar.css';


class SearchBar extends React.Component {
    constructor(props){
        super(props);

    }

    onInputChange(e){
        this.props.inputChange(e);
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.formSubmitted();
        
    }

    render(){
        const location = this.props.location;
        

        return(
            <div>
            <form onSubmit={(e)=> this.onFormSubmit(e)}>
                <button type= 'submit'>Weather Search</button>
                <select class="form-select" aria-label="Default select example">
                <option selected>Choose Temp Display</option>
                <option value="1">Fahrenheit</option>
                <option value="2">Celsius</option>
                </select>
                <input
                 id='search' 
                 name='search' 
                 value={location}
                 onChange={(e) => this.onInputChange(e)}
                 ></input>
            </form>

            </div>
            
        );
    }

}

export default SearchBar;