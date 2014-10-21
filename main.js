var myApp = angular.module('myApp', []);

function AppCtrl($scope) {

    initialize($scope);

    var capacity = 300;


    this.add = function(component) {
        var amt;
        if(component == 'A')
            amt = $scope.addA;
        else if(component == 'B')
            amt = $scope.addB;
        else if(component == 'C')
            amt = $scope.addC;

        if(amt == null) {
            return;
        }
        if ($scope.totalGallons + amt > capacity) {
            alert('over capacity');
            return;
        }

        if(component == 'A')
            $scope.aGallons += amt;
        else if(component == 'B')
            $scope.bGallons += amt;
        else if(component == 'C')
            $scope.cGallons += amt;

        $scope.totalGallons += amt;
        computeFractions($scope);


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
        var amt = $scope.remove;
        var newGallons = $scope.totalGallons - amt;

        if(amt != null && newGallons < 0 ) {
            alert('cannot remove ' + amt + ' gallons')
        }

        else if(amt != null) {
            $scope.aGallons = (newGallons * $scope.aFrac).toFixed(0);
            $scope.bGallons = (newGallons * $scope.bFrac).toFixed(0);
            $scope.cGallons = (newGallons * $scope.cFrac).toFixed(0);
            $scope.totalGallons = ($scope.totalGallons - amt).toFixed(0);

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

function computeFractions($scope) {

    $scope.aFrac = ($scope.aGallons / $scope.totalGallons).toFixed(2);
    $scope.bFrac = ($scope.bGallons / $scope.totalGallons).toFixed(2);
    $scope.cFrac = ($scope.cGallons / $scope.totalGallons).toFixed(2);

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
