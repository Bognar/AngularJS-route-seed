var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/services', {
        templateUrl: 'services.html'
    })
    $routeProvider.when('/about', {
        templateUrl: 'about.html'
        
    })
    $routeProvider.when('/products', {
        templateUrl: 'products.html'
    })
    $routeProvider.when('/', {
        template: 'Main page'
    })
}]);
