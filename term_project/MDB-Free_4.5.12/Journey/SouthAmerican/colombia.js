var myModule = angular.module('transTable', []);

myModule.controller('TableController', function TableController($scope) {
    $scope.paths = [
        {
            name: "Start at Bogota",
            departure: "BOG Airport",
            arrive: "CTG Airport",
            airline: "Viva Air Colombia",
            aircraft: "Airbus 320-200",
            price: 32
        },
        {
            departure: "CTG Airport",
            arrive: "PEI Airport",
            airline: "Viva Air Colombia",
            aircraft: "Airbus 320-200",
            price: 46
        },
        {
            departure: "PEI Airport",
            arrive: "MDE Airport",
            airline: "EasyFly",
            aircraft: "ATR 42-500",
            price: 35
        },
        {
            departure: "MDE Airport",
            arrive: "CLO Airport",
            airline: "Avianca",
            aircraft: "Airbus 320S",
            price: 65
        },
    ]
});