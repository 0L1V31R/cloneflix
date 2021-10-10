google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Filmes',     10],
        ['Séries',      15],
        ['Documentários',  5],
        ['Animes', 15]
    ]);

    var options = {
        legend: {position: 'none'},
        backgroundColor: '#141414',
        height: 400,
        width: 1000,
        titleTextStyle: {
            color: 'white',
            fontName: 'Arial',
            textAlign: 'center'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('barchart'));

    chart.draw(data, options);
}