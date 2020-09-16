var myModule = angular.module('transTable', []);

myModule.controller('TableController', function TableController($scope) {
    if (localStorage.path) {
        $scope.paths = JSON.parse(localStorage.getItem('path'));
    } else {
        $scope.paths = [{
                name: "Start at Lima District",
                departure: "LIM Airport",
                arrive: "TPP Airport",
                airline: "Sky Airline",
                aircraft: "Airbus 320-200",
                price: 36
            },
            {
                departure: "TPP Airport",
                arrive: "IQT Airport",
                airline: "Star Peru/Peruvian Airlines",
                aircraft: "Boeing 737-300",
                price: 104
            },
            {
                departure: "IQT Airport",
                arrive: "LIM Airport",
                airline: "Viva Air Peru",
                aircraft: "Airbus 320-200",
                price: 30
            },
            {
                departure: "LIM Airport",
                arrive: "AQP Airport",
                airline: "Sky Airline",
                aircraft: "Airbus 320-200",
                price: 33
            },
            {
                departure: "AQP Airport",
                arrive: "CUZ Airport",
                airline: "LATAM Peru",
                aircraft: "Airbus 320-200",
                price: 95
            },
            
        ];
    }
});