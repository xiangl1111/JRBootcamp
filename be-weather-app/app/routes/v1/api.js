const express = require('express');
const router = new express.Router();
const weatherController = require('../../controllers/weatherController');
const weatherValidation = require('../../validation/weatherValidation')
const postController = require('../../controllers/postController')

// router.get('/weathers', weatherValidation.index, weatherController.index)
router.get('/weathers',  weatherController.index)
router.get('/weathers/:id', weatherController.show)
router.post('/weathers', weatherController.store)
router.delete('/weathers/:id', weatherController.delete)
router.put('/weathers/:id', weatherController.update)

router.post('/posts',postController.store)
//create a posts endpoint create / view all / view one / update / delete
// router.get('/posts',(req,res)=>{
//     res.send('view all')
// })

// router.get('/posts/:id',(req,res)=>{
//     res.send('view one')
// })

// router.post('/posts',(req,res)=>{
//     res.send('create')
// })

// router.put('/posts/:id',(req,res)=>{
//     res.send('update')
// })

// router.delete('/posts/:id',(req,res)=>{
//     res.send('delete')
// })

//In there own controller return the method name (eg: res.send('view all')
//Add a validation for weathers.get endpoint to ensure that the city = string type
//package name express-validator
module.exports = router;