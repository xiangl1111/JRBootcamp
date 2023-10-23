import { Header } from "../Header/Header";
import './WeatherMain.css';
import {useEffect,useState} from 'react';
import {getWeather} from '../../api/weather/weather';
import { Forecast } from "../Forecast/Forecast";

export const WeatherMain =()=>{
    const [weatherData, setWeatherData] = useState(null);

    useEffect(()=>{
        const getWeatherData = async ()=>{
            const result = await getWeather()
            setWeatherData(result.data)
        }
        getWeatherData()
    },[])

    return(
        <div className ='weather-main'>
             <Header/>
             <Forecast data = {weatherData}/>
        </div>
    )
}