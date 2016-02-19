$().ready(function(){	
	
	var $select = $('#country-list'),
		url = 'assets/scripts/json/countries.json';
		//json = JSON.parse(url);

		//$.getJSON('assets/scripts/json/countries.json?format=jsoncallback=?',{format:'json'});

		$.ajax({
			type: 'GET',			
			url: url,			
			dataType: 'jsonp',
			jsonp: 'jsonp',
			crossDomain: true,
			success: function(data) {
				//console.log(data);
			},
			error: function(data) {
				console.log(data);
			}
		});


			/*, function(data){
			
			var vals = data.countries;

			$select.empty();
			$.each(data.countries, function(index, value) {
				$select.append('<option>'+ value + '</option>');
			});*/
		


	$('#tooltip').tooltip({
		title: 'Sum sociis natoque penatibus et natoque penatibus et magnis dis.',
		placement: 'bottom',
		trigger: 'hover'
	});

});


