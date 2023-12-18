pizzaApp.controller('menuController', function ($scope, $http) {
    $http.get('/data/menu.json').then(function (response) {
        $scope.menu = response.data;

        angular.forEach($scope.menu.categories, function (category) {
            category.show = true; // Initially show all categories
        });
    });

    // Toggle the visibility of menu items
    $scope.toggleCategory = function (category) {
        category.show = !category.show;
    };
});
