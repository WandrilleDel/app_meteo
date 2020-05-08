// exemple
//         labels: ['8h', '9h', '10h', '11h'],
//         data: [11, 12, 11, 15]
// createWeatherChart(['8h', '9h', '10h', '11h'], [11, 12, 11, 15])

function createWeatherChart(labels, data){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: 'Température',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        },

        // Configuration options go here
        options: {}
    });
}
