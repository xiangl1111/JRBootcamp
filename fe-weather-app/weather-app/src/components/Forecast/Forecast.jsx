import {ForecastCard} from '../ForecastCard/ForecastCard';
import '../../index.css'
export const Forecast = (props) =>{
    const {data} = props;
    // console.log(data)
    return (
        <div className="flex">
            {
               
                data?.list?.filter(item => item?.dt_txt?.includes("12:00:00"))
                .map(item => {
                    return <ForecastCard data={item}/>
                })
            }
        </div>
    )
}