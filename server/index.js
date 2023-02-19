const express = require('express');
const mongoose = require('mongoose');
const app = express();

const FoodModel = require('./models/Food'); 

// using json response from express for app
app.use(express.json());


// connecting to database mongoose 

mongoose.connect("mongodb://localhost:27017/food",  {
    useNewUrlParser: true
}, () => {
    console.log('db connected');
});

// simple route to get and response
app.get('/', async (req, res) => {
    const food = new FoodModel({foodName : "Apple", daySinceIAte : 3});

    try{
        await food.save();
        res.send('inserted data');
    } catch(err){
        console.log(err)
    }
})

// running server over a port
app.listen(3001, () =>{
    console.log('Server is running on port 3001');
})