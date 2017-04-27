webApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
    when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'HomepageController'
    }).
	otherwise({
		templateUrl: 'views/error.html'
	});
}]);