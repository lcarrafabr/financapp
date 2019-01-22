angular.module('myApp')
.config(function($httpProvider, $provide) {

})
.run(function($rootScope, $location, $window, $localStorage, $http) {

	// $httpProvider.defaults.common['Authorization'] = 'Bearer ' + token;
	var token = "";
	$http.defaults.headers.common.Authorization = 'Bearer ' + token;


	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
		
		var ignorar = false;
		if(!isEmpytNullOrUndefined(next)){
			// console.info("trocando de rota");
			//var ignorar = next.$$route.originalPath == "/painel-de-servicos";
		}else{
			// console.info("trocando de rota - sem next");
		}

		var usuarioLogado = $localStorage.usuarioLogado;
		if (!ignorar && isEmpytNullOrUndefined(usuarioLogado)) { 
			//$location.path("/login");
		}
	});
});
