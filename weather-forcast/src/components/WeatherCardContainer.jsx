import React from "react";
import State from "../dataLayer/Weather-state";
import WeatherCard from './WeatherCard';
import './WeatherCardContainer.css';

const WeatherCardContainer = () => {

    return (
        <div className="weather-cards">
            {State.map( item => <WeatherCard  weather={item}/> )}
        </div>
    )
}

export default WeatherCardContainer;
