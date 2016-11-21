(function() {
    'use strict';

    angular
        .module('app')
        .controller('logsController', controller);

    controller.$inject = ['$scope', '$stateParams', 'DataService'];

    function controller($scope, $stateParams, DataService) {
        $scope.releaseNumber = $stateParams.releaseNumber;
        $scope.env = $stateParams.env;
        // $scope.siteOption = $stateParams.siteOption;
        debugger;
        // Keep your initialization data on this function:
        activate();
        getRaw();


        function activate() {
            // DataService.getComponentList($scope.releaseNumber, $scope.env, $scope.siteOption).then(function(response) {
            DataService.getComponentList($scope.releaseNumber, $scope.env).then(function(response) {
                $scope.components = response.data;
                debugger;
                console.log(response.data)
            });

        }

        function getRaw() {

        }
    }
})();