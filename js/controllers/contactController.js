// contactController.js

pizzaApp.controller('contactController', function ($scope) {
    $scope.phoneNumber = '215-542-7720';
    $scope.faxNumber = '215-628-4346';
    $scope.email = 'mapleglenpizza@gmail.com';
    $scope.address = '641 Welsh Road, Maple Glen, PA 19002';
    $scope.hours = [
        { day: 'Friday & Saturday', time: '11:00 am - 2:00 am' },
        { day: 'Sunday - Thursday', time: '11:00 am - 1:00 am' },
        { day: 'Dining room (Sunday - Thursday)', time: '11:00 am - 9:00 pm' },
        { day: 'Dining room (Friday & Saturday)', time: '11:00 am - 10:00 pm' },
        { day: 'Friday, Saturday & Sunday', time: '11:00 am - 12:00am' }
    ];

    // Set the coordinates for your location
    $scope.map = {
        center: { latitude: 40.1010, longitude: -75.3836 }, // Replace with your latitude and longitude
        zoom: 15 // Adjust the zoom level as needed
    };

    $scope.marker = {
        id: 1,
        coords: { latitude: 40.1010, longitude: -75.3836 }, // Replace with your latitude and longitude
        options: { draggable: false },
    };
});
