(function() {
    'use strict';

    app.controller('componentsController', controller);

    controller.$inject = ['$scope', '$state', '$stateParams', 'DataService'];

    function controller($scope, $state, $stateParams, DataService) {


        $scope.releaseNumber = $stateParams.releaseNumber;
        $scope.env = $stateParams.env;
        $scope.component = $stateParams.component;

        $scope.logFiles = '';

        $scope.gridOptions = {

            columnDefs: [
                { name: 'eventTime' },
                { name: 'eventType' },
                { name: 'eventDescription' },
                { field: 'eventTime', type: 'date', name: 'RAW file', 'cellTemplate': '<a target="_blank" href="http://mtanjv9ccda01.aic.cip.att.com:8445/generateRawLogs/{{grid.getCellValue(row,col) | date:\'yyyy-MM-dd-HH mm:ss\'}}/' + $scope.releaseNumber + '/' + $scope.env.toUpperCase() + '/' + $scope.component + '" class="btn btn-warning">RAW</a>' }
            ]
        };


        // Keep your initialization data on this function:
        activate();

        function activate() {

            // DataService.getLogFiles($scope.releaseNumber, $scope.env, $scope.siteOption, $scope.component).then(function(response) {

            DataService.getLogFiles($scope.releaseNumber, $scope.env, $scope.component).then(function(response) {

                $scope.gridOptions.data = response.data.logEvents;
                // Transform data before assigning to scope
                // for (var i = 0; i < response.data.logEvents.length; i++) {
                //     response.data.logEvents[i].convertedTime = new Date(response.data.logEvents[i].eventTime)
                // };

                console.log(response);
                $scope.logFileName = response.data.logFileName;
                $scope.logFileLink = response.data.logFileName;

            })

        }

    }
})();