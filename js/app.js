var app = angular.module('bands', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when ('/', {
			templateUrl: 'views/mainView.html',
			controller: 'mainViewController'
		})
		.when ('/views/:name',{
			templateUrl: 'views/specificProductView.html',
			controller: 'oneBandViewController'
		})
		/*
		.when ('/views/:category', {
			templateUrl: 'views/productView.html',
			controller: 'HomeViewController'
		})
		.when ('/views/:category/:id', {
			templateUrl: 'views/specificProductView.html',
			controller: 'HomeViewController'
		})
		.when ('/contact', {
			templateUrl: 'views/formView.html',
			controller: 'FormViewController'
		})

		.otherwise({
			redirectTo: '/'
		})*/
}]);


app.controller('mainViewController', ['$scope', "$http", function($scope, $http){
	$http.get('json/Bands_Json.json').success(function(data){
		$scope.bands=data;
	})	
}])//crear un controlador con un scope; hay que mentarlo en el html donde quieres que actue

app.controller('oneBandViewController', ['$scope', "$http", '$routeParams', function($scope, $http, $routeParams){
	$http.get('json/Bands_Json.json').success(function(data){
		$scope.bands= data;
		$scope.filtro = $routeParams.name;
	})	
}])//crear un controlador con un scope; hay que mentarlo en el html donde quieres que actue

app.directive('mbPicture', function(){ 
	return {
		restrict: 'E', 
		templateUrl: 'views/header.html'
	};
});