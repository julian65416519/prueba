
$(document).ready(function()
{
		$.getJSON('./categories.json',function(response)
		{
			console.log( JSON.stringify(response) );
            		
		});
});