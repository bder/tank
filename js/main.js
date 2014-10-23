var myApp = angular.module('myApp',  ['n3-pie-chart']);

function AppCtrl($scope) {

    initialize($scope);
    refreshPieChart($scope);

    var capacity = 300;

    this.add = function(component) {
        var amt;
        if(component == 'A')
            amt = Number($scope.addA);
        else if(component == 'B')
            amt = Number($scope.addB);
        else if(component == 'C')
            amt = Number($scope.addC);

        if(amt == null) {
            return;
        }
        var newGallons = Number($scope.totalGallons) + Number(amt);

        if (newGallons > capacity) {
            alert('over capacity ' + newGallons);
            return;
        }

        if(component == 'A')
            $scope.aGallons = Number($scope.aGallons) + amt;
        else if(component == 'B')
            $scope.bGallons = Number($scope.bGallons) + amt;
        else if(component == 'C')
            $scope.cGallons = Number($scope.cGallons) + amt;

        $scope.totalGallons = newGallons;
        computeFractions($scope);
        refreshPieChart($scope);


        $scope.entries.push(
            {
                currentDate: new Date(),
                action: "add"+component,
                amount: amt,
                fracA:  $scope.aFrac,
                fracB:  $scope.bFrac,
                fracC:  $scope.cFrac,
                galA:   $scope.aGallons,
                galB:   $scope.bGallons,
                galC:   $scope.cGallons,
                galTotal: $scope.totalGallons
            }
        );
    }

    this.remove = function() {
        var amt = Number($scope.remove);
        var newGallons = Number(Number($scope.totalGallons) - Number(amt));

        if(amt != null && newGallons < 0 ) {
            alert('cannot remove ' + amt + ' gallons')
        }

        else if(amt != null) {
            $scope.aGallons = Number(newGallons * $scope.aFrac).toFixed(0);
            $scope.bGallons = Number(newGallons * $scope.bFrac).toFixed(0);
            $scope.cGallons = Number(newGallons * $scope.cFrac).toFixed(0);
            $scope.totalGallons = Number(newGallons).toFixed(0);

            refreshPieChart($scope);

            $scope.entries.push(
                {
                    currentDate: new Date(),
                    action: "remove",
                    amount: amt,
                    fracA:  $scope.aFrac,
                    fracB:  $scope.bFrac,
                    fracC:  $scope.cFrac,
                    galA:   $scope.aGallons,
                    galB:   $scope.bGallons,
                    galC:   $scope.cGallons,
                    galTotal: $scope.totalGallons
                }
            );
        }
    }
}

function refreshPieChart($scope) {
    $scope.data = [
        {label: "A", value: ($scope.aFrac * 100).toFixed(0), color: "steelblue"},
        {label: "B", value: ($scope.bFrac * 100).toFixed(0), color: "red"},
        {label: "C", value: ($scope.cFrac * 100).toFixed(0), color: "black"}
    ];
    $scope.options = {thickness: 10};


    $scope.gauge_data = [
        {label: "Fill", value: $scope.totalGallons, suffix: "", color: "gray"}
    ];

    $scope.gauge_options = {thickness: 10, mode: "gauge", total: 300};
}


function computeFractions($scope) {

    $scope.aFrac = ($scope.aGallons / $scope.totalGallons).toFixed(2);
    $scope.bFrac = ($scope.bGallons / $scope.totalGallons).toFixed(2);
    $scope.cFrac = ($scope.cGallons / $scope.totalGallons).toFixed(2);
    $scope.filledFrac = ($scope.totalGallons / 300).toFixed(2);

    $scope.totalFrac =
        (
            Number($scope.aGallons / $scope.totalGallons) +
            Number($scope.bGallons / $scope.totalGallons) +
            Number($scope.cGallons / $scope.totalGallons)
        ).toFixed(2);
}

function initialize($scope) {

    //starting conditions
    $scope.aGallons = 50;
    $scope.bGallons = 60;
    $scope.cGallons = 70;
    $scope.totalGallons = $scope.aGallons + $scope.bGallons + $scope.cGallons;
    computeFractions($scope);

    //first entry
    $scope.entries = [
        {
            currentDate: 'time',
            action: 'action',
            amount: 'amount',
            fracA:  'frA',
            fracB:  'frB',
            fracC:  'frC',
            galA:   'galA',
            galB:   'galB',
            galC:   'galC',
            galTotal: 'Tot'

        },
        {
            currentDate: new Date(),
            action: "init",
            amount: 0,
            fracA:  $scope.aFrac,
            fracB:  $scope.bFrac,
            fracC:  $scope.cFrac,
            galA:   $scope.aGallons,
            galB:   $scope.bGallons,
            galC:   $scope.cGallons,
            galTotal: $scope.totalGallons
        }

    ];
}
