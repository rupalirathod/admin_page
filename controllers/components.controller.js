(function() {
    'use strict';

    app.controller('componentsController', controller);

    controller.$inject = ['$scope', '$stateParams', 'DataService'];

    function controller($scope, $stateParams, DataService) {


        $scope.releaseNumber = $stateParams.releaseNumber;
        $scope.env = $stateParams.env;
        // $scope.siteOption = $stateParams.siteOption;
        $scope.component = $stateParams.component;

        $scope.logFiles = '';

        $scope.gridOptions = {

            columnDefs: [
                { name: 'eventTime' },
                { name: 'eventType' },
                { name: 'eventDescription' },
                { name: 'RAW file', 'cellTemplate': 'views/raw.html' }
            ]
        };


        // Keep your initialization data on this function:
        activate();

        function activate() {

            // DataService.getLogFiles($scope.releaseNumber, $scope.env, $scope.siteOption, $scope.component).then(function(response) {

            DataService.getLogFiles($scope.releaseNumber, $scope.env, $scope.component).then(function(response) {

                $scope.gridOptions.data = response.data.logEvents;
                console.log(response);
                debugger;
                $scope.logFileName = response.data.logFileName;
                $scope.logFileLink = response.data.logFileName;

            })

        }
    }
})();