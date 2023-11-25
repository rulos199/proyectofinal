(function(){
	angular.module("app")
		.controller("CategoriaController", ["$scope", "$stateParams", "$filter", CategoriaController]);

	function CategoriaController($scope, $stateParams, $filter){
		$scope.categoria = $filter("uppercase")($stateParams.categoria);
	};
}());