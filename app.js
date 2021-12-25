const express = require('express');
const app  = express();
const mongoose =  require('mongoose');


const cors = require('cors');
app.use(cors);

// body-parser for json support

const bodyParser = require('body-parser')
app.use(bodyParser.json());

// router middlewere----------
const itemRoute = require('./routers/items');
const { BSONType } = require('mongodb');
app.use('/items',itemRoute)

// connection to db-----------------
const url = 'mongodb://localhost/swiggy'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log('-----connected------')
})
//home route -------------------------- 
app.get('/',(req,res) =>{
    res.send('HOME PAGE');
});

// listnig on port for post moodule-----------------
app.listen(9000);