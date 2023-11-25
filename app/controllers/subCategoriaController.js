(function(){
	angular.module("app")
		.controller("SubCategoriaController", ["$scope", "$stateParams", "$filter", SubCategoriaController]);

	function SubCategoriaController($scope, $stateParams, $filter){
		$scope.categoria = $stateParams.categoria;		
		$scope.sub = $stateParams.sub;
		var x = "mensaje-mio-d-s"
		console.log(x.replace("-", " "))
	};
}());