console.log(this)
var callBackGetSuccess = function (data) {
    console.log("donnees api", data)
    //alert ("temperature : " + data.main.temp + "F" + " pression: " + data.main.pressure + " Hpa");
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature actuelle a " + queryLoc.value + " est de "  + data.main.temp + " c" + ", et la pression est de " + data.main.pressure + " Hpa<br>" + "Les conditions actuelles sont: " + data.weather[0].description 
    
    var iconcode = data.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);


}
var callBackPrevision = function (data) {
    console.log("donnees api", data)
    var element = document.getElementById ("zone_prevision");
    element.innerHTML = "Demain matin, a " + queryLoc.value+ ", il fera: " + data.list[7].main.temp + " c," + " la pression sera d'environ " + data.list[7].main.pressure + " Hpa<br>" + "Les conditions seront: " + data.list[7].weather[0].description
    
    var iconcode = data.list[7].weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicone').attr('src', iconurl);

    labels = []
    datas = []
    data.list.forEach(element => {
        labels.push(element.dt_txt)
        datas.push(element.main.temp)
    });
    createWeatherChart(labels, datas)
}


function buttonClickGet(){

    var queryLoc = document.getElementById("queryLoc").value;

    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&units=metric&lang=fr&APPID=8c362b30d4306b488e98589bc40761d7"
    
    
    $.get(url, callBackGetSuccess).done(function(){
    //alert("second success");
    })
    .fail(function(){
        alert("error");
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
        alert("error");
        })
    .always(function(){
        //alert("finished");
        });
}