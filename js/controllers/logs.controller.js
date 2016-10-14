(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('logsController', controller);

    controller.$inject = ['$scope', '$stateParams', 'DataService']; 

    function controller($scope, $stateParams, DataService) {
        
        $scope.releaseNumber = $stateParams.releaseNumber;
        $scope.env = $stateParams.env;

        // Keep your initialization data on this function:
        activate();

        function activate() { 
            DataService.getComponentList($scope.releaseNumber, $scope.env).then(function(response){
                $scope.components = response.data;
            });            
        }
    }
})();