//create(view one)  update delete (view all)
const openWeatherMapService = require('../services/openWeatherMapService');
const {query, validationResult} = require('express-validator');
//view all
exports.index = async(req,res) =>{
    // const result = validationResult(req);
    // if(result.isEmpty()){
    //     return res.send(`Hello,${req.query.city} is required!`)
    // }
    const data =  await openWeatherMapService.getWeather()
    // console.log(data)
    res.send(data.data)
}

//view one
exports.show =() =>{}

//create
exports.store =() =>{}

//delete
exports.delete =() =>{}

//update
exports.update =() =>{}