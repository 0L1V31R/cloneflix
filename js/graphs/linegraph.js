google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Dia', 'Horas'],
        ['Segunda',  2.30],
        ['Terça',  1.25],
        ['Quarta',  2.05],
        ['Quinta',  1.25],
        ['Sexta', 3.00],
        ['Sábado', 6.00],
        ['Domingo',8.00]
    ]);

    var options = {        
        backgroundColor: '#141414',
        height: 400,
        width: 1000,
        legend: 'none',
        titleTextStyle: {color: '#fff'},
        hAxis: { textStyle: {color: '#fff'} },
        vAxis: { textStyle: {color: '#fff'} }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}
