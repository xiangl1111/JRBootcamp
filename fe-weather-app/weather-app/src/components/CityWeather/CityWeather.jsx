import '../../index.css'
import './CityWeather.css'
export const CityWeather =(props)=>{
    const {data} = props;
    return(
        <div className="city_weather">
           <div >
            <p className="temp color_white">{data?.main.temp}</p>
            <p className="desc color_white">{data?.weather[0].description}</p>
           </div>
           <div className="flex space_between">
                <div className='text_center'>
                    <p className="sub_title color_white">HUMIDITY</p>
                    <p className="sub_title_text  color_white">{data?.main.humidity} %</p>
                </div>
                <hr />
                <div className='text_center'>
                   <p className="sub_title color_white">WIND</p>
                   <p className="sub_title_text color_white">{data?.wind.speed} K/M</p>
                </div>
           </div>
        </div>
    )
}