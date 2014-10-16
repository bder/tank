var myApp = angular.module('myApp', []);

function AppCtrl($scope) {

    $scope.date = new Date();

    $scope.entries = [
    ];

    var capacity = 300;


    $scope.aGallons = 50;
    $scope.bGallons = 60;
    $scope.cGallons = 70;

    $scope.totalGallons = $scope.aGallons + $scope.bGallons + $scope.cGallons;


    computeFractions($scope);

    this.addA = function() {
        if($scope.addA != null) {
            if(Number($scope.totalGallons) + Number($scope.addA) > capacity) {
                alert('over capacity');
            }
            else {
                $scope.aGallons = Number($scope.aGallons) + Number($scope.addA);
                $scope.totalGallons = Number($scope.totalGallons) + Number($scope.addA);
                computeFractions($scope);
            }
        }
        $scope.entries.push(
            {
                currentDate: new Date(),
                action: "addA",
                amount: $scope.addA
            }
        );
    }
    this.addB = function() {
        if($scope.addB != null) {
            if(Number($scope.totalGallons) + Number($scope.addB) > capacity) {
                alert('over capacity');
            }
            else {
                $scope.bGallons = Number($scope.bGallons) + Number($scope.addB);
                $scope.totalGallons = Number($scope.totalGallons) + Number($scope.addB);
                computeFractions($scope);
            }
            $scope.entries.push(
                {
                    currentDate: new Date(),
                    action: "addB",
                    amount: $scope.addB
                }
            );
        }
    }
    this.addC = function() {
        if($scope.addC != null) {
            if(Number($scope.totalGallons) + Number($scope.addC) > capacity) {
                alert('over capacity');
            }
            else {
                $scope.cGallons = Number($scope.cGallons) + Number($scope.addC);
                $scope.totalGallons = Number($scope.totalGallons) + Number($scope.addC);
                computeFractions($scope);
            }
            $scope.entries.push(
                {
                    currentDate: new Date(),
                    action: "addC",
                    amount: $scope.addC
                }
            );
        }
    }

    this.remove = function() {
        if($scope.remove != null && $scope.totalGallons - $scope.remove < 0 ) {
            alert('cannot remove ' + $scope.remove + ' gallons')
        }

        else if($scope.remove != null) {
            var oldGallons = $scope.totalGallons;
            var newGallons = $scope.totalGallons - $scope.remove;
            var newA = newGallons * $scope.aFrac;
            var newB = newGallons * $scope.bFrac;
            var newC = newGallons * $scope.cFrac;
            $scope.aGallons = newA.toFixed(0);
            $scope.bGallons = newB.toFixed(0);
            $scope.cGallons = newC.toFixed(0);
            $scope.totalGallons = newGallons;

            $scope.entries.push(
                {
                    currentDate: new Date(),
                    action: "remove",
                    amount: $scope.remove
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
