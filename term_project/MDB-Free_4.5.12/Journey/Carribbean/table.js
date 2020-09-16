var myModule = angular.module('transTable', []);

myModule.controller('TableController', function TableController($scope) {
    if (localStorage.flight) {
        $scope.flights = JSON.parse(localStorage.getItem("flight"));
    } else {
        $scope.flights = [{
            city: "Miami",
            code: "MIA",
            airline: "UP",
            aircraftType: "735",
            price: 85
        },
        {
            city: "Port-au-Prince",
            code: "PAP",
            airline: "UP",
            aircraftType: "ATR",
            price: 307
        }];
    }

    $scope.addFlight = function() {
        $scope.flights.push({
            city: "name",
            code: "XX",
            airline: "XX",
            aircraftType: "",
            price: 100
        });
    }

    $scope.saveFlight = function() {
        localStorage.setItem("flight", JSON.stringify($scope.flights));
    }

    $scope.paths = [
        {
            name: "Start at Nassu",
            departure: "NAS Airport",
            arrive: "ELH Airport",
            airline: "Pineapple Air",
            aircraft: "Beechcraft 1900C",
            price: 108
        },
        {
            departure: "ELH Airport",
            arrive: "NAS Airport",
            airline: "Southern Air Charter",
            aircraft: "Beechcraft 1900C/D",
            price: 96
        },
        {
            departure: "NAS Airport",
            arrive: "GGT Airport",
            airline: "Western Air/Sky Bahamas",
            aircraft: "Saab 340",
            price: "128/104"
        },
        {
            departure: "GGT Airport",
            arrive: "NAS Airport",
            airline: "Western Air/Sky Bahamas",
            aircraft: "Saab 340",
            price: "116/88"
        },
    ];

    $scope.TCpaths = [
        {
            name: "Start at Providenciales",
            departure: "PLS Airport",
            arrive: "GDT Airport",
            airline: "InterCaribbean Airways",
            aircraft: "DHC-6-300",
            price: 55
        },
        {
            departure: "GDT Airport",
            arrive: "PLS Airport",
            airline: "Caicos Express Airways",
            aircraft: "Beechcraft 1900/Cessna 402",
            price: 70
        },
    ]
});