webApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.
    when('/home', {
        templateUrl: 'views/homepage.html',
        controller: 'HomepageController'
//        redirectTo: '/'
    }).
    when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'HomepageController'
    }).
	otherwise({
		templateUrl: 'views/error.html'
	});
}]);