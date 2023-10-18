import { City } from "../City/City";
import { CityWeather } from "../CityWeather/CityWeather";

export const Header =()=>{
    return(
        <div>
             <CityWeather/>
             <City/>
        </div>
    )
}