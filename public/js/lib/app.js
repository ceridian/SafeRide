(function(){
	'use strict';

	var app = angular.module('home', ['ngRoute', 'ngAnimate', 'growlNotifications']);

	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider
			.when('/login', {
				templateUrl: 'temps/login-setup.html',
				controller: 'LoginSetup',
				controllerAs: 'login'
			})
			.otherwise({
				templateUrl: 'temps/home.html',
				controller: 'HomePage',
				controllerAs: 'home'
			});

		$locationProvider.html5Mode(true);

	} ]);

	app.factory('socket', ['$rootScope', function ($rootScope) {
		var socket = io.connect();
		return {
			on: function (eventName, callback) {
				socket.on(eventName, function () {
					var args = arguments;
					$rootScope.$apply(function () {
						callback.apply(socket, args);
					});
				});
			},
			emit: function (eventName, data, callback) {
				socket.emit(eventName, data, function () {
					var args = arguments;
					$rootScope.$apply(function () {
						if (callback) {
							callback.apply(socket, args);
						}
					});
				})
			}
		};
	}]);

	app.directive('mainView', function(){
		return {
			restrict: 'E',
			templateUrl: 'temps/mainView.html',
			controller: function($scope, $rootScope){

			}
		};
	});

	app.directive('navBar', function(){
		return {
			restrict: 'E',
			templateUrl: 'temps/navBar.html',
			controller: function($scope, $rootScope){

			}
		};
	});

	app.directive('searchBar', function(){
		return {
			restrict: 'E',
			templateUrl: 'temps/searchBar.html',
			controller: function($scope, $rootScope, $http){
				console.log($scope.submit);
				this.submit = function(obj){
					console.log(obj);
				}
			}
		};
	});

	app.controller('notifications', ['$rootScope', 'socket', function($rootScope, socket){
		$rootScope.notes = [];
		socket.on('alert', function(msg){
			console.log(msg);
			$rootScope.notes.push(msg);
		});
	}]);

	app.controller('HomePage', ['$scope', function($scope){
		console.log('home');
	} ]);

	app.controller('MainCtrl', ['$scope', function($scope){
		$scope.$on('LOAD', function(){$scope.loading=true});
		$scope.$on('UNLOAD', function(){$scope.loading=false});
	} ]);

	app.controller('LoginSetup', ['$http', '$rootScope', '$location', '$scope', function($http, $rootScope, $location){
		this.name = 'Login';

		this.login = function(main){
			var user = main.user;
			var pass = main.pass;

			console.log(main);
			/*$http.post('/login', {user: user, pass: pass}).success(function(data, status, headers, config){
				var status = data.status;
				var user = data.user;
				var group = data.group;
				if(status == 'ok'){
					$rootScope.loggedInUser = user;
					$location.path('/app/status');
				}else{
					console.log(status);
				}
			}).error(function(data, status, headers, config) {
				console.log(data.status);
			});*/
		};
	} ]);

})();
