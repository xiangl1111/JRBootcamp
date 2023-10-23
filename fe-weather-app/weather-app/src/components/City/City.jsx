import '../../index.css'
import './City.css'
export const City =(props)=>{
    const {city} = props;
    return(
        <div className="city_name color_white">{city?.name}</div>
    )
}