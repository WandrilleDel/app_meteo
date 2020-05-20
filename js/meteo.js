
var callBackGetSuccess = function (data) {
    console.log("donnees api", data)
    //alert ("temperature : " + data.main.temp + "F" + " pression: " + data.main.pressure + " Hpa");
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature actuelle a " + data.name + " est de "  + data.main.temp + " \u00b0C" + ", et la pression est de " + data.main.pressure + " Hpa<br>" + "Les conditions actuelles sont: " + data.weather[0].description + ", la vitesse du vent est de " + data.wind.speed*3.6 + " km/h"
    
    var iconcode = data.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);


}

var callBackPrevision = function (data) {
    console.log("donnees api", data)
    var element = document.getElementById ("zone_prevision");
    element.innerHTML = "Demain matin, a " + data.city.name+ ", il fera: " + data.list[7].main.temp + "\u00b0C," + " la pression sera d'environ " + data.list[7].main.pressure + " Hpa<br>" + "Les conditions seront: " + data.list[7].weather[0].description + ", la vitesse du vent sera de " + data.list[7].wind.speed*3.6 + " km/h"
    
    var iconcode = data.list[7].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicone').attr('src', iconurl);

    heures = []
    temperatures = []
    rains=[]
    data.list.forEach(element => {
        heures.push(element.dt_txt)
        temperatures.push(element.main.temp)
        if(element.rain === undefined){
            rains.push(0)
        } else{
            rains.push(element.rain["3h"])
        }
    });
    heures = []
    vent = []
    data.list.forEach(element => {
        heures.push(element.dt_txt)
        vent.push(element.wind.speed*3.6)
        }
    );   
    createWeatherChart(heures, temperatures, rains)
    createWindChart(vent, heures)
}


function buttonClickGet(){

    var queryLoc = document.getElementById("queryLoc").value;

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&units=metric&lang=fr&APPID=8c362b30d4306b488e98589bc40761d7"
    
    
    $.get(url, callBackGetSuccess).done(function(){
    //alert("second success");
    })
    .fail(function(){
        alert("Veuillez inscrire une ville");
    })
    .always(function(){
    //alert("finished");
    });
}

function buttonPrevision(){
    var queryLoc = document.getElementById("queryLoc").value;
    var url = "https://api.openweathermap.org/data/2.5/forecast?q="+queryLoc+"&units=metric&lang=fr&appid=8c362b30d4306b488e98589bc40761d7"
     
    $.get(url, callBackPrevision).done(function(){
        //alert("second success");
        })
    .fail(function(){
        alert("Veuillez inscrire une ville");
        })
    .always(function(){
        //alert("finished");
        });
}
