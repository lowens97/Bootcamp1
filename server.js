var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

	if (request.method == "GET" && parsedUrl.pathname == "/listings")
	{
		response.statusCode = 200;
		response.write(listingData);
	}
	else
	{
		response.statusCode = 404;
		response.write("Bad gateway error");
	}
	
	response.end();
  
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  
  listingData = data;
  var server = http.createServer(requestHandler);

// the server is now started, listening for requests on port 8080 - go to your browerd and paste in http://127.0.0.1:8080
server.listen(port, function() {
  console.log('server listening on: http://localhost:8080');
});
  
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    HINT: Read up on JSON parsing Node.js
   */

    //Check for errors
  

   //Save the sate in the listingData variable already defined
  

  //Creates the server
  
  //Start the server


});
