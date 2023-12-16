pizzaApp.controller('mainController', function ($location) {
    var vm = this;

    vm.isActive = function (destination) {
        return destination === $location.path();
    };
});
