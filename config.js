
config = {};

config.center = [37.756614, -122.433652, 12];

config.defaultPoint = {
	gmapsLatLng: [37.756614, -122.433652],  //will be converted manually to new google.maps.LatLng()
	'LOCATION_NAME': {value: 'My Home'}, 
	'ADDRESS': {value: 'Vlastina 2a'}
};

config.fusionTablesQuery = {
	select: '\'LOCATION_NAME\'',
	from: '1aQSsgRr0wHUcUQ7AYNWBtgoovZMs7qEF91VmzEfo'
};

// everything between <%= and %> is eval'd
config.cardHtmlTemplate = '<li class="card" data-index="<%= idx %>">'
		+ '<span class="handle" style="background-image:url(\'<%= iconUrl %>\')"></span>'
		+ '<b><%= getter("LOCATION_NAME") %></b> <a href="#">×</a><br>'
		+ 'Address: <%= getter("ADDRESS") %><br>'
		+ '<%= getter("YR_INSTALLED") + (getter("YR_INSTALLED") > 2010 ? "NEW" : "OLD") %>'
		+ '</li>';
