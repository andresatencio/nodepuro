var http = require('http');
var url = require("url");

function iniciar(route){

	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Se recibio una peticion")

		route(pathname);

		response.writeHead(200, {"Content-Type":"text/html"});
		response.write("Hola Mostro!");
		response.end();
	}

	http.createServer(onRequest).listen(3000);

	console.log("Servidor iniciado");

}

exports.iniciar = iniciar;