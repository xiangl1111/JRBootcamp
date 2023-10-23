import '../../index.css'
import './ForecastCard.css'

export const ForecastCard = (props) => {
    const {data} = props;
    console.log(data)
    return (
        <div className='forecast_card'>
            <p className='day'>{data.dt_txt}</p>
            <p className='temp'> {data.main.temp}</p>
            <p className='desc'>{data.weather[0].description}</p>
        </div>
    )
}