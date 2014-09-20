var flightsData = {

	getFlightForTicket : function ( ticket )
	{
		
	},

	
	showFlightsForm : function ()
	{
		this.requestFlightsJSONP();
	},	
	
	requestFlightsJSONP : function()
	{
		$.ajax(
               {
                   url:        "http://jetlight.nl/schiphol/flights",
                   dataType:   "json",
                   headers:		{ "Accept" : "application/json" },
                   error:      function( jqXHR, textStatus, errorThrown ) {
                                   flightsData.handleError( jqXHR, textStatus, errorThrown );
                               },
                   success:    function(data, textStatus, jqXHR) {
                                    flightsData.displayUserData(displayAircraftsData);
                               }
               }
               
        );

	},
	
	requestAircraftsCORS : function()
	{
		var url = 'http://145.35.195.100/rest/flights';

		var xhr = createCORSRequest('GET', url);
		if (!xhr) {
		    alert('CORS not supported');
		    return;
		}
		
		  // Response handlers.
		xhr.onload = function() {
		    var text = xhr.responseText;
		    var title = getTitle(text);
		    
		    aircraftsData.displayAircraftsData( text );
		};
		
		xhr.onerror = function() {
			this.handleError();
		};
		
		xhr.setRequestHeader("Accept","application/json");
		
		xhr.send();
	},
	
	handleError : function ( jqXHR, textStatus, errorThrown )
	{
		alert('Woops, there was an error making the request.');
	},
	
	displayAircraftsData : function ( data )
	{
		$("#aircrafts").html( data );
	}
	
	
};