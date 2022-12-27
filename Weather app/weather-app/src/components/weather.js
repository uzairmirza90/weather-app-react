import React from "react";
import { useState, useEffect } from "react";
import WeatherData from "./weatherData";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import "../App.css";

const Weather = () => {
  const [weatherData, setweatherData] = useState("lahore");
  const [weatherInfo, setweatherInfo] = useState({});

  async function getDataFromApi() {
    if (weatherData === "") {
        alert("Please enter city name...");
    } else {
      try {
        const getData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${weatherData}&units=imperial&appid=a98bdcdc1ad2cfd9a78f0a21e46386f3`
        );
        const response = await getData.json();
        console.log(response);

        const { description } = response.weather[0];
        const { temp, pressure, humidity } = response.main;
        const { country } = response.sys;
        const { name } = response;
        const { visibility } = response;
        
        function temperatureFintoC(temp) {
          return ((temp - 32) * 5) / 9;
        }

        const weatherInformation = {
          description: description,
          temperature: temperatureFintoC(temp),
          pressure: pressure,
          humidity: humidity,
          countryName: country,
          cityName: name,
          visibility: visibility,
        };

        console.log(weatherInformation.description);
        setweatherInfo(weatherInformation);
        
      } catch (err) {
          return alert("The city you entered cannot found...")
      }
    }
  }

  useEffect(() => {
    return getDataFromApi();
  }, []);

  return (
    <div className="weather">
      <div className="search">
        <TextField
          type="search"
          value={weatherData}
          onChange={(e) => setweatherData(e.target.value)}
          placeholder="Enter City..."
        ></TextField>
        <Button className="button" variant="contained" onClick={getDataFromApi}>
          Search
        </Button>
      </div>
      <div className="error">
        <p>{}</p>
      </div>
      <div className="data">
        <WeatherData weatherInfo={weatherInfo} />
      </div>
    </div>
  );
};

export default Weather;
