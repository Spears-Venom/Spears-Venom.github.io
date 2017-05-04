var canvas = d3.select('body').append('svg')
	.attr('width', 700)
	.attr('height', 700)

d3.json('data/india_map.json', function(data) {

	var group = canvas.selectAll('g')
		.data(data.features)
		.enter()
		.append('g')

	var projection = d3.geo.mercator()
							.scale(950)
							.translate([-1100,700]);
						

	var path = d3.geo.path().projection(projection);
	var areas = group.append('path')
		.attr('d', path)
		.attr('class', 'area')
		.attr('fill', 'teal')
		.style('fill-opacity',0.5)
		.style('stroke','white')
		.style('fill','#E5D9C9');
})