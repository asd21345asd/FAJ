Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data) {
    // Create the chart
    Highcharts.stockChart('container', {

        chart: {
            styledMode: true
        },

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            name: 'AAPL',
            data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});
