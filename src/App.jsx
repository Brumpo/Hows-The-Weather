import './App.css'
import React from 'react'

const { useState } = React;

const Alerts = ({ title, features }) => (
    <div className="alerts">
        <span className="alertsTitle">{title}</span>
        {features.map((alertFeature) => (
            <div>{alertFeature}</div>
        ))}
    </div>
);

const getTimeString = (startTime) => {
  const start = new Date(startTime);

  return `${start.getHours()}`;
};

const ForecastPeriod = ({ name, startTime, shortForecast, temperature, temperatureUnit }) => (
    <div className="forecastPeriod">
        <h3>{name || getTimeString(startTime)}</h3>
        <div className="shortForecast">{shortForecast}</div>
        <div className="temperature">
            {temperature} {temperatureUnit}
        </div>
    </div>
);
const Forecast = ({ periods }) => (
    <div className="forecast">
        {periods ? periods.map(ForecastPeriod) : "No Forecast Available"}
    </div>
);

const Page = () => {
    const [lat, setLat] = useState("42.365250");
    const [long, setLong] = useState("-71.105011");

    const getWeather = () => {
      //Create a click handler to first get endpoints from the POINTS_URL
      //Use the returned endpoints for forecast and forecastHourly to get the weather
      //display the hourly and current forcast via the provided Forecast component
      //cleanup the app however you see fit
        const POINTS_URL = `https://api.weather.gov/points/${lat},${long}`
    };

    return (
        <div className="App">
            <div className="input">
                <label htmlFor="latitude">Latitude</label> <input value={lat} id="latitude" />
            </div>

            <div className="input">
                <label htmlFor="longitude">Longitude</label> <input value={long} id="longitude" />
            </div>

            <br />
            <div className="formButton">
                <button onClick={getWeather}>How's the weather?</button>
            </div>
            <div className="weather">
                <h2>Today's Forecast</h2>
                <Forecast />

                <h2>Hourly Forecast</h2>
                <Forecast />
            </div>
        </div>
    );
};

export default function App() {
  return (
    <main>
      <Page/>
    </main>
  )
}