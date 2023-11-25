(function(){
	var app = angular.module("app", ["ui.router", "ngResource"]);

	app.config(Router);

	function Router($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "templates/home.html"
			}) 
			.state('hardware', {
				url: "/hardware/:categoria/",
				templateUrl: "templates/common/categoria.html",
				controller: "CategoriaController",
			})
			.state('hardw-sub', {
				url: "/hardware/:categoria/:sub/",
				templateUrl: "templates/common/categoria.html",
				controller: "SubCategoriaController",
			})
			//
			.state('gadget', {
				url: "/gadgets/:categoria/",
				templateUrl: "templates/common/categoria.html",
				controller: "CategoriaController",
			})
			.state('gad-sub', {
				url: "/gadgets/:categoria/:sub/",
				templateUrl: "templates/common/categoria.html",
				controller: "SubCategoriaController",
			})
			//
			.state('red', {
				url: "/redes/:categoria/",
				templateUrl: "templates/common/categoria.html",
				controller: "CategoriaController",
			})
			/*.state('red-sub', {
				url: "/redes/:categoria/:sub/",
				templateUrl: "templates/common/categoria.html",
				controller: "SubCategoriaController",
			})*/
			//
			.state('softw', {
				url: "/software/:categoria/",
				templateUrl: "templates/common/categoria.html",
				controller: "CategoriaController",
			})
			/*.state('softw-sub', {
				url: "/software/:categoria/:sub/",
				templateUrl: "templates/common/categoria.html",
				controller: "SubCategoriaController",
			})*/
			.state('foto', {
				url: "/fotografia/:categoria/",
				templateUrl: "templates/common/categoria.html",
				controller: "CategoriaController",
			})
			.state('foto-sub', {
				url: "/fotografia/:categoria/:sub",
				templateUrl: "templates/common/categoria.html",
				controller: "SubCategoriaController",
			})
			//
			.state('imp', {
				url: "/impresion/:categoria/",
				templateUrl: "templates/common/categoria.html",
				controller: "CategoriaController",
			})
			//
			.state('paper', {
				url: "/papeleria/:categoria/",
				templateUrl: "templates/common/categoria.html",
				controller: "CategoriaController",
			})
			//
			.state('electr', {
				url: "/electronica/:categoria/",
				templateUrl: "templates/common/categoria.html",
				controller: "CategoriaController",
			})
			.state('electr-sub', {
				url: "/electronica/:categoria/:sub/",
				templateUrl: "templates/common/categoria.html",
				controller: "SubCategoriaController",
			})

			/*DAR DE ALTA ARTICULOS*/
			.state('admin', {
				url: "/admin/crear-articulo",
				templateUrl: "templates/articulos/create.html",
			})

	};
}());