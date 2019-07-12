import React, { Component } from 'react';
import './App.css';




const Api_Key = process.env.REACT_APP_WEATHER_API_KEYS;

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      ZipCode:'10457',
      name: '',
      temperature: '',
      description: '',
      tempMax: '',
      tempMin: '',
    }

  }

  handleWeatherInput=(event)=>{
    event.preventDefault()
    this.setState({
      ZipCode:event.target.zipCode.value
    })

    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.ZipCode},us&appid=${Api_Key}&units=imperial`


    fetch(url)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      this.setState({
        name: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min
      })
    })
  }

  render() {
    return (
      <div className="App">
      <div>
        <h1>Weather App</h1>
        <h3>CurrentCity: {this.state.name}</h3>
        <h3>Weather: {this.state.temperature}</h3>
        <h3>description: {this.state.description}</h3>
      </div>
      <form onSubmit={this.handleWeatherInput}>
        <input type='text' placeholder='Enter Your ZipCode' name='zipCode' />
        <input type='submit' value='submit' />

      </form>
      </div>
    );
  }
}

export default App;
