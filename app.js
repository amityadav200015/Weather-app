var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputvalue')

var namee = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=6f65900812ccddf7e92ff20e7f6f839e')
    .then(response => response.json())
    .then(data =>  {                                                                 //console.log(data)  //to show details in console window.
        var namevalue = data['name'];
        var tempvalue = data['main']['temp'];
        var descvaalue = data['weather'][0]['description'];

        namee.innerHTML = namevalue;
        temp.innerHTML = "Temperature = "+tempvalue+"  Farahite";
        desc.innerHTML = "Current condition = "+descvaalue;
})

    

.catch(err => alert("Wrong City Name!"))  
})  