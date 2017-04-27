webApp.factory('affinityServices', function($http, $q) {

    'use strict';

    // var getBlogs = function () {
    //     var deferred = $q.defer();
    //     $http.get('https://jsonplaceholder.typicode.com/posts')
    //     .success(function(data) {
    //         deferred.resolve(data);
    //     }).error(function(error, a, b, c) {
    //         deferred.reject(error);
    //     });
    //     return deferred.promise;
    // };

    // var getBlogComments = function (id) {
    //     var deferred = $q.defer();
    //     $http.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
    //     .success(function(data) {
    //         deferred.resolve(data);
    //     }).error(function(error, a, b, c) {
    //         deferred.reject(error);
    //     });
    //     return deferred.promise;
    // };

    return {
        // getBlogs: function () {
        //     return getBlogs ();
        // },
        // getBlogComments: function (id) {
        //     return getBlogComments (id);
        // }
    };
});
