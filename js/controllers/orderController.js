pizzaApp.controller('orderController', function ($scope) {
    $scope.pageTitle = 'Place an Order (Pizza Only)';
    $scope.userName = '';
    $scope.email = '';
    $scope.phone = '';
    $scope.selectedBase = '';
    $scope.toppings = [];
    $scope.notes = '';
    $scope.creditCard = '';
    $scope.expDate = '';
    $scope.cvv = '';

    // Toppings list
    $scope.availableToppings = [
        'Pepperoni', 'Mushrooms', 'Sausage', 'Green Peppers', 'Onions', 'Tomatoes', 'Cheese', 'Bacon', 'Olives'
    ];
    $scope.premiumToppings = [
        'Chicken', 'Steak', 'Shrimp', 'Anchovies', 'Spinach', 'Artichokes', 'Feta Cheese', 'Extra Cheese'
    ];

    $scope.addTopping = function (topping) {
        if ($scope.toppings.indexOf(topping) === -1) {
            $scope.toppings.push(topping);
        }
    }

    $scope.removeTopping = function (topping) {
        var index = $scope.toppings.indexOf(topping);
        if (index > -1) {
            $scope.toppings.splice(index, 1);
        }
    }

    $scope.baseCost = 0;
    $scope.toppingsCost = 0;
    $scope.totalCost = 0;

    // Update costs when base or toppings change
    $scope.$watchGroup(['selectedBase', 'toppings'], function () {
        // Calculate base cost
        if ($scope.selectedBase === 'Plain') {
            $scope.baseCost = 10.00;
        } else if ($scope.selectedBase === 'Gluten Free' || $scope.selectedBase === 'White') {
            $scope.baseCost = 12.00;
        }

        // Calculate toppings cost
        $scope.toppingsCost = $scope.toppings.length * 1.50;

        // Update total cost
        $scope.totalCost = $scope.baseCost + $scope.toppingsCost;
    });

    // Submit order function
    $scope.submitOrder = function () {
        console.log('Order Submitted:', {
            userName: $scope.userName,
            email: $scope.email,
            phone: $scope.phone,
            selectedBase: $scope.selectedBase,
            toppings: $scope.toppings,
            notes: $scope.notes,
            creditCard: $scope.creditCard,
            expDate: $scope.expDate,
            cvv: $scope.cvv,
            totalCost: $scope.totalCost
        });
    };
});
