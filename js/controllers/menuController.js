pizzaApp.controller('menuController', function ($scope, $http) {
    $http.get('data/menu.json').then(function (response) {
        $scope.menu = response.data;
    });
});