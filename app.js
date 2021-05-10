const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const https = require('https');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => res.send('Hello World'));

app.post('/findTemp', (req, res) => {
  let location = req.body.location
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid="+ process.env.API_KEY +"8&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    //HTTP request to the api to fetch the requested data
    response.on('data',function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const loc = weatherData.name;
      const icon = weatherData.weather[0].icon;
      const country = weatherData.sys.country;
      const state = weatherData.weather[0].description;
      res.send({temp, loc, icon, country, state})
    });
  });
})

//Server Listening
app.listen(8080, (err) => console.log('Server is listening'));
