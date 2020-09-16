var myModule = angular.module('transTable', []);

myModule.controller('TableController', function TableController($scope) {
    $scope.paths = [
        {
            name: "Start at La Paz",
            departure: "LPB Airport",
            arrive: "UYU Airport",
            airline: "Linea Aerea Amaszonas",
            aircraft: "Bombardier CRJ 200",
            price: 105
        },
        {
            departure: "LPB Airport",
            arrive: "VVI Airport",
            airline: "Boliviana De Aviacion",
            aircraft: "Boeing 737-300",
            price: 156
        }
    ];

});