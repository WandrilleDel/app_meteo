// exemple
//         labels: ['8h', '9h', '10h', '11h'],
//         data: [11, 12, 11, 15]
// createWeatherChart(['8h', '9h', '10h', '11h'], [11, 12, 11, 15])

function createWeatherChart(heures, temperatures, precipitations){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            
            datasets: [{
                label: 'Température',
                borderColor: 'rgb(255, 99, 132)',
                data: temperatures,
                type: 'line'
            },{
                label: 'Précipitaions',
                data: precipitations,
                borderColor: 'rgb(21, 46, 231)',
                backgroundColor: 'rgb(21, 46, 231)',
                type: 'bar'
            }],
            labels: heures
        },

        // Configuration options go here
        options: {}
    });
}
