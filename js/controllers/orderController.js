pizzaApp.controller('orderController', function ($scope) {

    $scope.pageTitle = 'Order Online (Pizza Only)';

    // Initialize toppings in $scope.order
    $scope.order = {
        userName: '',
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
        
    $scope.baseCost = 0;
    $scope.totalCost = 0;

    $scope.$watchGroup(['order.pizzaBase'], function () {
        if ($scope.order.pizzaBase === 'Plain') {
            $scope.baseCost = 10.00;
        } else if ($scope.order.pizzaBase === 'Gluten Free' || $scope.order.pizzaBase === 'White') {
            $scope.baseCost = 12.00;
        }

        // Update total cost
        $scope.totalCost = $scope.baseCost;
    });

    // Calculate Total Cost function
    $scope.calculateTotalCost = function () {
        return $scope.baseCost;
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
            userName: '',
            email: '',
            phone: '',
            pizzaBase: '',
            notes: '',
            creditCard: '',
            expDate: '',
            cvv: ''
        };
        $scope.baseCost = 0;
        $scope.totalCost = 0;
    };
});
