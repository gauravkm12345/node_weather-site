console.log('hey this is set');



const weatherForm=document.querySelector('form');

const search=document.querySelector('input');

async function weather(place){
   await fetch('http://localhost:3000/weather?address='+place)
   .then((response)=>{
        response.json().then((data)=>{
        console.log(data);
        })
    })
}

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('tea time');
    weather(search);
//************* 






//************* 




    
    console.log(search.value);
})