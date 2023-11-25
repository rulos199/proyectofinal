(function(){
	angular.module("app")
		.filter("oracion", Oracion);

	function Oracion(){
		return function(txt){
			if (txt != null) {
				txt.toUpperCase();
				return txt.replace(/-/g, " ");
			};
		};
	};
}());