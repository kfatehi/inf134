'use strict';

// pattern fill
// http://stackoverflow.com/questions/25881186/d3-fill-shape-with-image-using-pattern

function render(dataset) {
  var width = innerWidth;
  var height = innerHeight;
  var radius = 175;
  var donutWidth = 75;
  var color = d3.scaleOrdinal(d3.schemeCategory20b);

  d3.select('#chart').selectAll('svg').remove();

  var svg = d3.select('#chart').append('svg')

  var defs =  svg.append("defs");

  var g = svg.attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

  var arc = d3.arc()
    .innerRadius(radius - donutWidth)
    .outerRadius(radius*8);

  var pie = d3.pie().value(1);

  dataset.forEach(function(item) {
    var height = innerHeight/2+100;
    var width = innerWidth/2+100;
      defs.append("pattern")
      .attr("id", item.id)
      .attr('patternUnits', 'userSpaceOnUse')
      .attr('width', width)
      .attr('height', height)
      .append("image")
      .attr("xlink:href", item.img)
      .attr('width', width+100)
      .attr('height', height+100)
  });

  var path = g.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr("fill", (d)=>`url(#${d.data.id})`)
    .attr('style', 'cursor:pointer')
    .on('click', (d)=>{
      window.location = '/'+d.data.id;
    });
}


d3.csv('topics.csv', function(error, dataset) {
  render(dataset);
  d3.select(window).on('resize', ()=> render(dataset) );
});
