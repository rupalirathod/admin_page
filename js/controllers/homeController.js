(function() {
    'use strict';
    angular
        .module('app')
        .controller('homeController', controller);

    controller.inject = ['$http', '$stateParams', 'DataService', '$scope']

    function controller($http, $stateParams, DataService, $scope) {

        $scope.pageClass = 'page-home';

        //once if we have this all version and components will be dynamic
        /*DataService.getEnvironmentsSummary().then(function(data){
            $scope.environments = data;
        })*/

        // $scope.envs = [];
        $scope.releaseNumbers = [];
        // $scope.releaseStatus = [];
        // $scope.siteOptions = []
        $scope.ccdmodules = {};
        $scope.errorOccured = {};
        DataService.getEnvironmentsSummary().then(function(data) {

            // for (var i = 0; i <= data.environments.length; i++) {

            //     $scope.releaseNumbers.push(data.environments[i].release);


            //     // console.log($scope.releaseNumbers.push(data.environments.release));
            // }
            // $scope.envs.push(data.environment);
            // console.log($scope.releaseNumbers);
            // $scope.siteOptions.push(data.siteOptions);
            // $scope.releaseStatus.push(data.status)
        })

        debugger;
        // }, function errorCallback(error) {

        // });

        DataService.getComponentList(1702, "dev").then(function(response) {
            console.log($scope.releaseNumber + $scope.env);
            $scope.ccdmodules["dev"] = response.data.components;

        }, function errorCallback(error) {
            $scope.errorOccured["dev"] = true;
            $scope.disableClass = 'disabled';
        });

        DataService.getComponentList(1610, "ist").then(function(response) {
            console.log($scope.releaseNumber + $scope.env);
            $scope.ccdmodules["ist"] = response.data.components;

            //populate $scope.ccdmodules["ist"]
        }, function errorCallback(error) {
            $scope.errorOccured["ist"] = true;
            $scope.disableClass = 'disabled';
        });

        DataService.getComponentList(1610, "e2e").then(function(response) {
            console.log($scope.releaseNumber + $scope.env);
            $scope.ccdmodules["e2e"] = response.data.components;
            //populate $scope.ccdmodules["ist"]
        }, function errorCallback(error) {
            $scope.errorOccured["e2e"] = true;
            $scope.disableClass = 'disabled';
        });
        DataService.getComponentList(1607, "pvt").then(function(response) {
            console.log($scope.releaseNumber + $scope.env);
            $scope.ccdmodules["pvt"] = response.data.components;
            console.log(response.data)
                //populate $scope.ccdmodules["ist"]

        }, function errorCallback(error) {
            $scope.errorOccured["pvt"] = true;
            $scope.disableClass = 'disabled';
        });


    };
})();