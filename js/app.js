var pizzaApp = angular.module('pizzaApp', ['ngRoute']);

pizzaApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/index.html',
        controller: '/js/controllers/mainController'
    })
    .when('/about', {
        templateUrl: '/views/about.html',
        controller: '/js/controllers/aboutController'
    })
    .when('/menu', {
        templateUrl: '/views/menu.html',
        controller: 'js/controllers/menuController'
    })
    .when('/order', {
        templateUrl: '/views/order.html',
        controller: 'js/controllers/orderController'
    })
    .when('/contact', {
        templateUrl: '/views/contact.html',
        controller: 'js/controllers/contactController'
    })
    .otherwise({
        redirectTo: '/'
    });
});

pizzaApp.controller('mainController', function ($scope) {
    $scope.navbar = '/includes/nav.html';
    $scope.footer = '/includes/footer.html';
});