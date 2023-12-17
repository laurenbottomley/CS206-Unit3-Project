pizzaApp.controller('orderController', function ($scope) {

    $scope.pageTitle = 'Order Online (Pizza Only)';

    // Initialize toppings in $scope.order
    $scope.order = {
        fullName: '',
        email: '',
        phone: '',
        toppings: [],
        premiumToppings: [],
        pizzaBase: '',
        notes: '',
        creditCard: '',
        expDate: '',
        cvv: ''
    };
    
    // Define toppings
    $scope.toppings = ['Pepperoni','Anchovies','Sausage','Mushrooms', 'Peppers','Garlic', 'Extra Cheese', 'Ham', 'Broccoli', 'Pesto Sauce', 'Black Olives', 'Bacon', 'Ricotta', 'Spinach', 'Pineapple'];
    $scope.premiumToppings = ['Chicken', 'Steak', 'Eggplant', 'Artichokes', 'Meatballs', 'Roasted Peppers'];   
    $scope.toppingsPrice= 3.50.toFixed(2);
    $scope.premiumToppingsPrice = 7.00.toFixed(2);
    $scope.baseCost = 0;
    $scope.totalCost = 0;

    $scope.$watchGroup(['order.pizzaBase'], function () {
        if ($scope.order.pizzaBase === 'Gluten Free') {
            $scope.baseCost = 20.75;
        } else if ($scope.order.pizzaBase === 'Tomato Pie') {
            $scope.baseCost = 20.75;
        } else if ($scope.order.pizzaBase === 'Plain') {
            $scope.baseCost = 20.75;
        } else if ($scope.order.pizzaBase === 'Boardwalk') {
            $scope.baseCost = 29.95;
        } else if ( $scope.order.pizzaBase === 'White') {
            $scope.baseCost = 24.50;
        }

        $scope.totalCost = $scope.baseCost;
    });

    $scope.updateOrderSummary = function () {
        // Clear the order summary
        $scope.orderSummary = [];
    
        // Add the pizza base to the order summary
        $scope.orderSummary.push({ item: $scope.order.pizzaBase + ' Pizza Base', cost: $scope.pizzaBasePrices[$scope.order.pizzaBase] });
    
        // Add the regular toppings to the order summary
        for (var topping in $scope.order.regularToppings) {
            if ($scope.order.regularToppings[topping]) {
                $scope.orderSummary.push({ item: topping, cost: $scope.toppingPrices[topping] });
            }
        }
    
        // Add the premium toppings to the order summary
        for (var premiumTopping in $scope.order.premiumToppings) {
            if ($scope.order.premiumToppings[premiumTopping]) {
                $scope.orderSummary.push({ item: premiumTopping, cost: $scope.toppingPrices[premiumTopping] });
            }
        }
    };
    $scope.calculateTotalCost = function () {
        var toppingsCost = 0;
        for (var topping in $scope.order.toppings) {
            if ($scope.order.toppings[topping]) {
                toppingsCost += 3.50;
            }
        }
        for (var topping in $scope.order.premiumToppings) {
            if ($scope.order.premiumToppings[topping]) {
                toppingsCost += 7.00;
            }
        }
        return ($scope.baseCost + toppingsCost).toFixed(2);
    };
    // Converting topping objects to array for itemized order summary
    $scope.getToppingsArray = function(toppings) {
        return Object.keys(toppings).filter(topping => toppings[topping]);
    };


    // Submit order function
    $scope.submitOrder = function () {
        console.log('Order Submitted:', $scope.order);
        $scope.clearForm();
        alert('Thank you for your order! Your pizza will be ready in 30 minutes.');
    };

    // Clear form function
    $scope.clearForm = function () {
        $scope.order = {
            fullName: '',
            email: '',
            phone: '',
            pizzaBase: '',
            toppings: [],
            premiumToppings: [],
            notes: '',
            creditCard: '',
            expDate: '',
            cvv: ''
        };
        $scope.baseCost = 0;
        $scope.totalCost = 0;
    };
});
