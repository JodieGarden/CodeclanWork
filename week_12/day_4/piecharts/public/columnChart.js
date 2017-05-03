var ColumnChart = function(){
  var container = document.querySelector('#column-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title:{
      text: "Quiche Varieties"
    },
    series: [{
      name: "Cohort G1",
      data:[1,8,1,1,5],
      colors:['black', 'purple', 'thistle', 'slategrey', 'saddlebrown']
    }],
    xAxis: {
      categories: ['Ke$ha', 'Lorraine', 'Cheese & Onion', 'Ellen', 'HATRED FOR QUICHE']
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    }
  });
}