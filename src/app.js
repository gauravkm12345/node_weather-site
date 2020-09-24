const express= require('express');
const path=require('path');
const { dirname } = require('path');
var request=require('request');




console.log("hi");

var request=require('request');

async function weather(lat,lon){
    let url=`https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=439d4b804bc8187953eb36d2a8c26a02`;
    request({url:url,json:true}, (error, response)=> {
      if(error)
      {
          console.log('unable to reach weather location');
          return error;
      }
      else if(response.body.message)
      {
          console.log(response.body.message);
          return error;
      }
      else{
        console.log('  weather =>  '+response.body.weather[0].description); 
        return response.body.weather[0].description;
       }
        
    
    });
    };
   
     function geo(place){
        let url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiZ2F1cmF2amFpcyIsImEiOiJja2VhMGx6bDcyOTJvMnNwYnJ1ZGZnbWV4In0.lFf6yzuwhOLZNNFCrexjEw&limit=2`;
        request({url:url,json:true},(error,responses)=>{
            if(error)
            {
                console.log('unable to reach maxbox');
            }
            else if(responses.body.message)
            {
                console.log(responses.body.message);
            }
            else
            {
                console.log('    CENTER => '+responses.body.features[0].center);
            let lon=responses.body.features[0].center[0];
            let lat=responses.body.features[0].center[1];

         return weather(lon,lat);
            
            }}
        );
            
    };



console.log('hi');

const app = express();
const port =process.env.PORT || 3000;
const appDirctory=path.join(__dirname,'../public');
const viwespath=path.join(__dirname,'../views');
app.set('view engine','hbs');
app.set('views',viwespath);
app.use(express.static(appDirctory))

app.get('',(req,res)=>{
    res.render('index');
})

app.get('/help',(req,res)=>{
    res.send(['name','age']);
})


app.get('/weather',async(req,res)=>{
    
    if(!req.query.address)
    {
       
        return res.send({
            error:"please provide an address"
        })
    }
  
  let locatio=req.query.address;
     res.send( {
        forecast:"it is raining",
        location:locatio
     
       
       
      
    
    })
    console.log(req.query.addres)
})


app.get('/products',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
        error: 'error\n please enter search term'
    });
     
    }
  
    res.send({
        products:[]
    })
})

app.get('*',(req,res)=>{
res.send('My 404 page');
})

app.listen(port,()=>{
    console.log('server is up  '+port);
})
