(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('componentsController', controller);

    controller.$inject = ['$scope', '$stateParams', 'DataService']; 

    function controller($scope, $stateParams, DataService) {
        
        console.log($stateParams);

        $scope.releaseNumber = $stateParams.releaseNumber;
        $scope.env = $stateParams.env;
        $scope.component = $stateParams.component;
        
        $scope.logFiles = DataService.getLogFiles($scope.releaseNumber, $scope.env, $scope.component);
        
        $scope.gridOptions = { data: [
            { data: 'test1' },
            { data: 'test1' },
            { data: 'test1' },
            { data: 'test1' },
            { data: 'test1' },
        ] };


        // Keep your initialization data on this function:
        activate();

        function activate() { 


            // DataService.getLogFiles($scope.releaseNumber, $scope.env, $scope.component).then(function(response){
            //     $scope.logFiles = response.data;
            //     console.log(response.data);
            //     if (!$scope.$$phase) {
            //         $scope.$apply();
            //     } 
            // })
        }
    }
})();