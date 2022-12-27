import React from "react";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import "../App.css";

const WeatherData = ({ weatherInfo }) => {
    const { 
        description: description, 
        temperature: temp,
        pressure: pressure, 
        humidity: humidity, 
        countryName: country, 
        cityName: name, 
        visibility: visibility,
    } = weatherInfo;
    
    function formatAMPM(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        let strTime = hours + ":" + minutes + " " + ampm;
        return strTime;
    }

    return (
        <>
            <div className="namesAndTemp">
                <div className="nameAndDateAndIcon">
                    <p className="city">{weatherInfo.cityName} - {weatherInfo.countryName}</p>
                    <p>{new Date().toLocaleDateString()}</p>
                    <p>{`${formatAMPM(new Date())}`}</p>
                    <WbCloudyOutlinedIcon
                        style={{ color: "whit" }}
                        fontSize="large"
                    ></WbCloudyOutlinedIcon>
                    <p className="description">{weatherInfo.description}</p>
                </div>
                <div className="temp">
                    <p>{Math.round(weatherInfo.temperature)}&deg;</p>
                </div>
            </div>

            <div className="properties">
                <div className="first">
                    <WbCloudyOutlinedIcon fontSize="large"></WbCloudyOutlinedIcon>
                    <p>Pressure - {weatherInfo.pressure}</p>
                </div>
                <div className="second">
                    <WbCloudyOutlinedIcon fontSize="large"></WbCloudyOutlinedIcon>
                    <p>Humidity - {weatherInfo.humidity}</p>
                </div>
                <div className="third">
                    <WbCloudyOutlinedIcon fontSize="large"></WbCloudyOutlinedIcon>
                    <p>Visibility - {weatherInfo.visibility}</p>
                </div>
            </div>
        </>
    );
};

export default WeatherData;
