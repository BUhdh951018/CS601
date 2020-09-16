var myModule = angular.module('transTable', []);

myModule.controller('TableController', function TableController($scope) {
    $scope.paths = [{
            name: "Start at Esmeraldas",
            departure: "ESM Airport",
            arrive: "UIO Airport",
            airline: "TAME",
            aircraft: "ATR 42-500/Embraer 190",
            price: 66
        },
        {
            departure: "UIO Airport",
            arrive: "GYE Airport",
            airline: "TAME/LATAM Ecuador",
            aircraft: "ATR 42-500/Embraer 190/Airbus 320-200",
            price: 44
        },
        {
            departure: "UIO Airport",
            arrive: "CUE Airport",
            airline: "TAME/LATAM Ecuador",
            aircraft: "ATR 42-500/Embraer 190/Airbus 320-200",
            price: 43
        },
    ];

});