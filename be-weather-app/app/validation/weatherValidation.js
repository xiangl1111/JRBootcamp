const {query} =require('express-validator');

const index =[
    query('city').isString()
];

module.exports ={
    index
}