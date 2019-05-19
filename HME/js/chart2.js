var chart = AmCharts.makeChart( "chart2", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "allocation": "Exchange Listing",
    "value": 5670000000
  }, {
    "allocation": "Buyback Program",
    "value": 2025000000
  }, {
    "allocation": "Charity Donation",
    "value": 405000000
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