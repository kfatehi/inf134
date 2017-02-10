'use strict';

// pattern fill
// http://stackoverflow.com/questions/25881186/d3-fill-shape-with-image-using-pattern

var width = innerWidth;
var height = innerHeight;
var radius = innerWidth/4;
var donutWidth = innerHeight/2;
var color = d3.scaleOrdinal(d3.schemeCategory20b);
var svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');
var arc = d3.arc()
  .innerRadius(radius - donutWidth)
  .outerRadius(radius*8);
var pie = d3.pie()
  .value(function(d) { return d.count; })
  .sort(null);
d3.csv('topics.csv', function(error, dataset) {
  dataset.forEach(function(d) {
    d.count = +d.count;
    d.enabled = true;                                         // NEW
  });
  var path = svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
      return color(d.data.label);
    })                                                        // UPDATED (removed semicolon)
    .each(function(d) { this._current = d; });                // NEW
});
