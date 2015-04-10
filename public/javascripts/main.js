(function(){
    var jobApp = angular.module('jobApp', ['ngResource', 'ngRoute', 'ui.bootstrap']);

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

    jobApp.directive('alljobs', function(){
        return {
            restrict: 'E',
            templateUrl: '/templates/jobsTable'
        };
    });

    jobApp.factory('Jobs', function($resource){
        var model = $resource('/api/jobs/:id', {id: '@id'});
        return {
            model: model,
            items: model.query()
        };
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

    jobApp.controller('homeController', ['$scope', '$modal', 'Jobs', function($scope, $modal, Jobs){
        $scope.addJob = function(){
            var modalInstance = $modal.open({
                templateUrl: '/newJob',
                controller: 'newJobController'
            });
        };

        $scope.jobs = Jobs.items;

    }]);

    jobApp.controller('newJobController', ['$scope', '$modalInstance', 'Jobs', function($scope, $modalInstance, Jobs){
        $scope.cancel = function(){
            $modalInstance.dismiss('cancel');
        };

        $scope.newJob = {response: false};
        $scope.confirm = function(){
            var job = new Jobs.model($scope.newJob);
            job.$save(function(savedJob){
                savedJob = new Jobs.model(savedJob);
                Jobs.items.push(savedJob);
            });
            $scope.newJob = {response: false};
        };

    }]);

})();