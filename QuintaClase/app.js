(function(){
	var app = angular.module('store',['store-products']); // se crea la dependencia con el módulo de los productos porque para funcionar necesita productos

	app.controller('StoreController',['$http',function($http){ 
	//el "StoreController" seria la clase 
	//aqui le estoy diciendo que me inyecte las funcionalidades del servicio http, GET. Ahora dentro de esta funcion puedo usar el http,get o .post, etc 
		//this.products=gems; //se declara la variable product que apunta a la variable gem
		var store = this; //aqui le asigno la variable store para poder llamarlo de adentro 
		store.products=[];
		$http.get('/~braymrr/data.json').success(function(data){
			store.products=data;
		});
	}]);

})();
