function route(handle, pathname){
	console.log("Ruteando para "+pathname);
	if (typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}else{
		console.log("No se encontro handler para "+pathname);
		return "404 No encontrado";
	}
}

exports.route = route;