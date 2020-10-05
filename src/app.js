const express= require('express');
const path=require('path');
const { dirname } = require('path');
var request=require('request');




console.log("hi");

var request=require('request');



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
