var pizzaApp = angular.module('pizzaApp', ['ngRoute']);

pizzaApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/index.html',
        controller: '/js/controllers/mainController'
    })
    .when('/about', {
        templateUrl: 'pages/about.html',
        controller: '/js/controllers/aboutController'
    })
    .when('/menu', {
        templateUrl: 'pages/menu.html',
        controller: 'js/controllers/menuController'
    })
    .when('/order', {
        templateUrl: 'pages/order.html',
        controller: 'js/controllers/orderController'
    })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'js/controllers/contactController'
    })
    .otherwise({
        redirectTo: '/'
    });
});

pizzaApp.controller('mainController', function ($scope) {
    $scope.navbar = '/nav.html';
    $scope.footer = '/footer.html';
});