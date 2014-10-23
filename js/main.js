var myApp = angular.module('myApp',  ['n3-pie-chart', 'n3-line-chart', 'n3charts.utils']);

function AppCtrl($scope) {

    initialize($scope);
    refreshPieChart($scope);
    showLineChart($scope);

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
        {label: "A", value: ($scope.aFrac*100).toFixed(0), color: "steelblue"},
        {label: "B", value: ($scope.bFrac*100).toFixed(0), color: "red"},
        {label: "C", value: ($scope.cFrac*100).toFixed(0), color: "black"}
    ];
    $scope.options = {thickness: 10};


    $scope.gauge_data = [
        {label: "Fill", value: $scope.totalGallons, suffix: "g", color: "gray"}
    ];

    $scope.gauge_options = {thickness: 10, mode: "gauge", total: 300};
}

function showLineChart($scope) {
    $scope.linedata = [
        {
            x: 0,
            val_0: 0,
            val_1: 0,
            val_2: 0,
            val_3: 0
        },
        {
            x: 1,
            val_0: 0.993,
            val_1: 3.894,
            val_2: 8.47,
            val_3: 14.347
        },
        {
            x: 2,
            val_0: 1.947,
            val_1: 7.174,
            val_2: 13.981,
            val_3: 19.991
        },
        {
            x: 3,
            val_0: 2.823,
            val_1: 9.32,
            val_2: 14.608,
            val_3: 13.509
        },
        {
            x: 4,
            val_0: 3.587,
            val_1: 9.996,
            val_2: 10.132,
            val_3: -1.167
        },
        {
            x: 5,
            val_0: 4.207,
            val_1: 9.093,
            val_2: 2.117,
            val_3: -15.136
        },
        {
            x: 6,
            val_0: 4.66,
            val_1: 6.755,
            val_2: -6.638,
            val_3: -19.923
        },
        {
            x: 7,
            val_0: 4.927,
            val_1: 3.35,
            val_2: -13.074,
            val_3: -12.625
        },
        {
            x: 8,
            val_0: 4.998,
            val_1: -0.584,
            val_2: -14.942,
            val_3: 2.331
        },
        {
            x: 9,
            val_0: 4.869,
            val_1: -4.425,
            val_2: -11.591,
            val_3: 15.873
        },
        {
            x: 10,
            val_0: 4.546,
            val_1: -7.568,
            val_2: -4.191,
            val_3: 19.787
        },
        {
            x: 11,
            val_0: 4.042,
            val_1: -9.516,
            val_2: 4.673,
            val_3: 11.698
        },
        {
            x: 12,
            val_0: 3.377,
            val_1: -9.962,
            val_2: 11.905,
            val_3: -3.487
        },
        {
            x: 13,
            val_0: 2.578,
            val_1: -8.835,
            val_2: 14.978,
            val_3: -16.557
        },
        {
            x: 14,
            val_0: 1.675,
            val_1: -6.313,
            val_2: 12.819,
            val_3: -19.584
        },
        {
            x: 15,
            val_0: 0.706,
            val_1: -2.794,
            val_2: 6.182,
            val_3: -10.731
        },
        {
            x: 16,
            val_0: -0.292,
            val_1: 1.165,
            val_2: -2.615,
            val_3: 4.63
        },
        {
            x: 17,
            val_0: -1.278,
            val_1: 4.941,
            val_2: -10.498,
            val_3: 17.183
        },
        {
            x: 18,
            val_0: -2.213,
            val_1: 7.937,
            val_2: -14.714,
            val_3: 19.313
        },
        {
            x: 19,
            val_0: -3.059,
            val_1: 9.679,
            val_2: -13.79,
            val_3: 9.728
        },
        {
            x: 20,
            val_0: -3.784,
            val_1: 9.894,
            val_2: -8.049,
            val_3: -5.758
        },
        {
            x: 21,
            val_0: -4.358,
            val_1: 8.546,
            val_2: 0.504,
            val_3: -17.751
        },
        {
            x: 22,
            val_0: -4.758,
            val_1: 5.849,
            val_2: 8.881,
            val_3: -18.977
        },
        {
            x: 23,
            val_0: -4.968,
            val_1: 2.229,
            val_2: 14.155,
            val_3: -8.691
        },
        {
            x: 24,
            val_0: -4.981,
            val_1: -1.743,
            val_2: 14.485,
            val_3: 6.866
        },
        {
            x: 25,
            val_0: -4.795,
            val_1: -5.44,
            val_2: 9.754,
            val_3: 18.259
        },
        {
            x: 26,
            val_0: -4.417,
            val_1: -8.278,
            val_2: 1.616,
            val_3: 18.576
        },
        {
            x: 27,
            val_0: -3.864,
            val_1: -9.809,
            val_2: -7.086,
            val_3: 7.625
        },
        {
            x: 28,
            val_0: -3.156,
            val_1: -9.792,
            val_2: -13.314,
            val_3: -7.951
        },
        {
            x: 29,
            val_0: -2.323,
            val_1: -8.228,
            val_2: -14.89,
            val_3: -18.704
        }
    ];
    $scope.lineoptions = {
        series: [
            {
                y: "val_0",
                label: "A line sinusoid",
                color: "#1f77b4",
                axis: "y",
                type: "line",
                thickness: "1px",
                id: "series_0",
                drawDots: true
            },
            {
                y: "val_0",
                label: "A column sinusoid",
                color: "#ff7f0e",
                type: "column",
                axis: "y",
                id: "series_1"
            },
            {
                y: "val_0",
                label: "An area sinusoid",
                color: "#2ca02c",
                type: "area",
                axis: "y",
                thickness: "1px",
                id: "series_2",
                drawDots: true
            }
        ],
        stacks: [],
        axes: {x: {type: "linear", key: "x"}, y: {type: "linear"}},
        lineMode: "linear",
        tension: 0.7,
        tooltip: {mode: "scrubber"},
        drawLegend: true,
        drawDots: true,
        columnsHGap: 5
    };
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
