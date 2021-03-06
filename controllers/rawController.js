(function() {
    'use strict';

    angular
        .module('app')
        .controller('rawController', controller);

    controller.$inject = ['$scope', '$stateParams', 'DataService'];

    function controller($scope, $stateParams, DataService) {
        $scope.releaseNumber = $stateParams.releaseNumber;
        $scope.env = $stateParams.env;
        $scope.eventTime = $stateParams.eventTime;
        // $scope.siteOption = $stateParams.siteOption;
        debugger;
        // Keep your initialization data on this function:
        activate();

        function activate() {
            // DataService.getComponentList($scope.releaseNumber, $scope.env, $scope.siteOption).then(function(response) {
            DataService.getRawFiles($scope.releaseNumber, $scope.env, $scope.component, $scope.eventTime).then(function(response) {
                $scope.components = response.data;
                debugger;
                console.log(response.data)
            });

        }
    }
})();