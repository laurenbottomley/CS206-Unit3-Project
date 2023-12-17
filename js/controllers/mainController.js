pizzaApp.controller('mainController', function ($location, $http, $scope) {
    var vm = this;

    vm.isActive = function (destination) {
        return destination === $location.path();
    };

    $http.get('data/announcements.json')
        .then(function(response) {
            $scope.announcements = response.data;
        });
});