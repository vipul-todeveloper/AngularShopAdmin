var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/Home', {
                templateUrl: 'http://localhost:63342/angular/home.html',
                controller: 'AddOrderController'
            }).
            when('/Order', {
                templateUrl: 'http://localhost:63342/angular/home.html',
                controller: 'ShowOrdersController'
            }).
            otherwise({
                redirectTo: 'http://localhost:63342/angular/home.html'
            });
    }]);


sampleApp.controller('AddOrderController', function($scope) {

    $scope.message = 'This is Add new order screen';

});


sampleApp.controller('ShowOrdersController', function($scope) {

    $scope.message = 'This is Show orders screen';

});