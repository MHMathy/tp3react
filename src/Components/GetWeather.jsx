import { useEffect, useState } from "react";

export default function Weather({posInfo,setLocationWeather}){
    let [weatherInfo,setWeatherInfo] = useState([]);
    let [weatherInfoLocation,setWeatherInfoLocation] = useState("");
    let [weatherID,setWeatherID] = useState("");
    useEffect(() => {
        const fetchWeather = () => {
            fetch(`https://www.metaweather.com/api/location/search/?lattlong=${posInfo["lat"]},${posInfo["lon"]}`)
                .then(response => response.json())
                .then(data => setWeatherID(data[0]["woeid"]));
        }
        if(posInfo["lat"]!=undefined)fetchWeather();
        return(
            <></>
        )
    },[posInfo])

    useEffect(() => {
        const fetchWeather = () => {
            fetch(`https://www.metaweather.com/api/location/${weatherID}`)
                .then(response => response.json())
                .then(data => setWeatherInfo(data));
        }
        if(weatherID!=="") fetchWeather();
        return(
            <></>
        )
    },[weatherID])

    useEffect(()=>{
        if(weatherInfo!=[]){
            let temp = weatherInfo["consolidated_weather"];
            if(temp!=undefined) {
                setLocationWeather(temp[0]["weather_state_name"])
                setWeatherInfoLocation(temp[0]["weather_state_name"])
            }
        }

        return(
            <></>
        )
    },[weatherInfo])

    return(
        <>
            <div className="infoMeteo">
                <h1>{weatherInfo["title"]}</h1>
                <p>{weatherInfoLocation}</p>
            </div>
        </>

    )

}