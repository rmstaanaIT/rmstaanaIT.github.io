var chart = AmCharts.makeChart( "chart1", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "allocation": "ICO",
    "value": 8100000000
  }, {
    "allocation": "Marketing",
    "value": 450000000
  }, {
    "allocation": "Community Give Away",
    "value": 450000000
  }],
  "valueField": "value",
  "titleField": "allocation",
  "outlineAlpha": 0.4,
  "depth3D": 20,
  "angle": 30,
  "export": {
    "enabled": true
  }
} );