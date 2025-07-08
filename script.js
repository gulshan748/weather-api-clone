var request= new XMLHttpRequest();
    request.open('GET', link , true);
    request.onload=function(){
       var obj=JSON.parse(this.response)
       console.log(obj);
       document.getElementById('weather').innerHTML = obj.weather[0].description;
       document.getElementById('location').innerHTML= obj.name;
       document.getElementById('temp').innerHTML = Math.round ( obj.main.temp - 273.15 );
       document.getElementById('icon').src = "https://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
       document.getElementById('humidity').innerHTML = "Humidity: " + obj.main.humidity + "%";
        var windSpeedKmH = (obj.wind.speed * 3.6).toFixed(1);
            document.getElementById('wind').innerHTML = "Wind speed: " + windSpeedKmH + " km/h";
    }
    if(request.status>=200 && request.status <400){
        var temp=obj.main.temp;
    }
    else {
        console.log("The city data is not available");
    }
    request.send()