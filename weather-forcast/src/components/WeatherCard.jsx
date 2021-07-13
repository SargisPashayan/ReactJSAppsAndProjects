import React from 'react';
import './WeatherCard.css';

let WeatherCard = (props) => {
    return (
        <div className="card">
            <h3>{props.weather.weekDay}</h3>
            <img src={props.weather.imgURL} alt="weather-card" />
            <h4>{props.weather.temp}</h4>
        </div>
    )
}

export default WeatherCard;