(function(){
    var jobApp = angular.module('jobApp', ['ngResource', 'ngRoute']);

    jobApp.config(function($routeProvider){
        $routeProvider
            .when('/signin', {
                templateUrl: '/templates/signin',
                controller: 'signinController'
            })
            .when('/', {
                templateUrl: '/templates/signup',
                controller: 'signupController'
            })
            .when('/main', {
                templateUrl: '/templates/main',
                controller: 'homeController'
            });
    });

    jobApp.controller('signupController', ['$scope', '$http', function($scope, $http){
        $scope.submit = function(){
            $http.post('/auth/signup', {username: $scope.username, password: $scope.password});
        };
    }]);

    jobApp.controller('signinController', ['$scope', '$http', function($scope, $http){
        $scope.submit = function(){
            $http.post('/auth/login', {username: $scope.username, password: $scope.password});
        };
    }]);

    jobApp.controller('homeController', ['$scope', function($scope){
        $scope.success = "You Did It!";
    }]);

})();