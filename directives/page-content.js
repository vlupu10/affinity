webApp.directive('pageContent', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/page-content.html',
        controller: ['$scope','blogServices', function($scope, blogServices) {

        	angular.element('#scroll-down').selectpicker();

        	$scope.callComments = function ($event) {
        		var id = $event.target.attributes['data-id'].value;

        		location.href = location.href + 'comments/' + id;
        	};

        }],
    };
});