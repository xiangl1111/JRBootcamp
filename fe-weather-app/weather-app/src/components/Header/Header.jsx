import { City } from "../City/City";
import { CityWeather } from "../CityWeather/CityWeather";
import '../../index.css'
import './Header.css'
export const Header =(props)=>{
    const {data} = props;

    return(
        <div className="flex space_between header background_blue text_center">
             <CityWeather data = {data?.list[4]}/>
             <City city = {data?.city}/>
        </div>
    )
}