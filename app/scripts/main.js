var UnitChart = require('./unit_chart').UnitChart;

//editor
d3.json('./data/editor.json', function(error,data){
  UnitChart('editorchart', data);
});


//Unit Column Chart
d3.json('./data/unit_column_chart_shared.json', function(error,data){
  UnitChart('unit_column_chart_shared', data);
});
d3.json('./data/unit_column_chart.json', function(error,data){
  UnitChart('unit_column_chart', data);
});
d3.json('./data/unit_column_chart_shared_mark.json', function(error,data){
  UnitChart('unit_column_chart_shared_mark', data);
});


//Hierarchy
d3.json('./data/titanic_spec_packxy_hierarchy.json', function(error,data){
  UnitChart('packxy_hierarchy', data);
});
d3.json('./data/titanic_spec_packxy_isolated.json', function(error,data){
  UnitChart('packxy_isolated', data);
});
d3.json('./data/titanic_spec4.json', function(error,data){
  UnitChart('packxy2', data);
});
d3.json('./data/titanic_spec_packxy_mixed.json', function(error,data){
  UnitChart('packxy_mixed', data);
});

//Aspect ratio
d3.json('./data/square_aspect.json', function(error,data){
  UnitChart('square_aspect', data);
});
d3.json('./data/maxfill_aspect.json', function(error,data){
  UnitChart('maxfill_aspect', data);
});


var container = document.getElementById('jsoneditor');
var options = {};
var editor = new JSONEditor(container, options);

d3.json('./data/editor.json', function(error, json) {
  editor.set(json);
});

var button = d3.select('#updatebutton');

button.on('click', function() {
  var json = editor.get();
  console.log(json);
  d3.select('#editorchart').select('svg').remove();
  UnitChart('editorchart', json);

});
