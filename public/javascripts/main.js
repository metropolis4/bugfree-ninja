(function(){
    var jobApp = angular.module('jobApp', ['ngResource', 'ngRoute']);

    jobApp.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/templates/signin',
                controller: 'signinController'
            })
            .when('/main', {
                templateUrl: '/templates/main',
                controller: 'homeController'
            });
    });

    jobApp.controller('signinController', ['$scope', '$http', function($scope, $http){
        $scope.submit = function(){
            var user = $scope.username;
            var password = $scope.password;
            if(user === "It's Me" && password === "q1w2E#R$"){
                $http.get('#/main');
            }
            else {
                $http.get('/');
            }
        };
    }]);

    jobApp.controller('homeController', ['$scope', function($scope){
        $scope.success = "You Did It!";
    }]);

})();