var myApp = angular.module('myApp', []);

function AppCtrl($scope) {

    initialize($scope);

    var capacity = 300;

    var fA,fB,fC,fT,gA,gB,gC,gT;

    function getCurrentValues() {
        fA = Number($scope.aFrac);
        fB = Number($scope.bFrac);
        fC = Number($scope.cFrac);
        fT = Number($scope.totalFrac);
        gA = Number($scope.aGallons);
        gB = Number($scope.bGallons);
        gC = Number($scope.cGallons);
        gT = Number($scope.totalGallons);
    }



    this.add = function(component) {
        getCurrentValues();
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
        if (gT + amt > capacity) {
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
        getCurrentValues();

        $scope.entries.push(
            {
                currentDate: new Date(),
                action: "add"+component,
                amount: amt,
                fracA:  fA,
                fracB:  fB,
                fracC:  fC,
                galA:   gA,
                galB:   gB,
                galC:   gC,
                galTotal: gT
            }
        );
    }

    this.remove = function() {
        getCurrentValues();
        var amt = $scope.remove;
        var newGallons = gT - amt;

        if(amt != null && newGallons < 0 ) {
            alert('cannot remove ' + amt + ' gallons')
        }

        else if(amt != null) {
            $scope.aGallons = (newGallons * fA).toFixed(0);
            $scope.bGallons = (newGallons * fB).toFixed(0);
            $scope.cGallons = (newGallons * fC).toFixed(0);
            $scope.totalGallons = (gT - amt).toFixed(0);
            getCurrentValues();

            $scope.entries.push(
                {
                    currentDate: new Date(),
                    action: "remove",
                    amount: amt,
                    fracA:  fA,
                    fracB:  fB,
                    fracC:  fC,
                    galA:   gA,
                    galB:   gB,
                    galC:   gC,
                    galTotal: gT
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
