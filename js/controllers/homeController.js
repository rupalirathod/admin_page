app.controller('homeController', ['$scope', '$http', '$stateParams', 'DataService', function($scope, $http, $stateParams, DataService) {

    $scope.pageClass = 'page-home';
    //$scope.releaseNumber = 1607;//$stateParams.releaseNumber;
    $scope.site = ["site1", "site2"];
    //$scope.env = ["dev", "ist", "pvt", "e2e"];
    //$scope.component = $stateParams.component;
    //  $http.get('logfile_linecount.2016-10-03.json')
    //         .then(function(res) {
    //             $scope.pageClass = 'page-home';
    //         });

    $scope.ccdmodules = {};
    $scope.errorOccured = {};

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


}])