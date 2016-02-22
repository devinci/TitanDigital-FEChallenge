//On Document Ready
$().ready(function(){	
	//Country List Box as var
	var $select = $('#country-list');		
		//Ajax call to jason
		$.ajax({					
			url: 'assets/scripts/json/countries.json',			
			dataType: 'json',
			mimeType: 'application/json',
			//On Success Append List to Object		
			success: function(data) {			
				$.each(data, function(i, obj){					
					$.each(obj.countries, function(i, name){						
						$select.append('<option>'+name.name+'</option>');
					});
				});
			},
			//On Error, Display Error Message in Select Box
			error: function(data) {
				$select.empty();
				$select.append('<option selected="selected">Failed to load country list</option>');
			}
		});
	//Tooltip popup
	$('#tooltip').tooltip({
		title: 'Sum sociis natoque penatibus et natoque penatibus et magnis dis.',
		placement: 'bottom',
		trigger: 'hover'
	});
});


