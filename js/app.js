var pizzaApp = angular.module('pizzaApp', ['ngRoute']);

pizzaApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/index.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })
    .when('/menu', {
        templateUrl: 'pages/menu.html',
        controller: 'menuController'
    })
    .when('/order', {
        templateUrl: 'pages/order.html',
        controller: 'orderController'
    })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })
    .otherwise({
        redirectTo: '/'
    });
});

pizzaApp.controller('mainController', function ($scope) {
    $scope.navbar = 'navbar.html';
    $scope.footer = 'footer.html';
});