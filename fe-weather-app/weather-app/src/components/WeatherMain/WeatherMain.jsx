import { Header } from "../Header/Header";
import './WeatherMain.css';
import {useEffect,useState} from 'react';
import {getWeather} from '../../api/weather/weather';
import { Forecast } from "../Forecast/Forecast";
import {SocialMedia} from "../SocialMedia/SocialMedia"
import '../../index.css'

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
             <Header data= {weatherData}/>
             <div className ='flex space_between sub_content'>
                <SocialMedia />
                <Forecast data = {weatherData}/>
             </div>
             
        </div>
    )
}