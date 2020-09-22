var request=require('request');

function weather(lat,lon){
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
   
    function geo(place,ap){
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

ap(weather(lon,lat));
            
            }}
        );
            
    };

