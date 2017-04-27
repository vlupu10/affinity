webApp.directive('pageContent', function() {
    return {
        restrict: 'A',
        templateUrl: 'views/page-content.html',
        controller: ['$scope','affinityServices', function($scope, affinityServices) {


        }],
    };
});