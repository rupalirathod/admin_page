app.controller('ccd1610Controller', ['$scope', '$http', '$stateParams', 'DataService', function($scope, $http, $stateParams, DataService) {
    // $http.get('ccd_1610_module.json')
    //     .then(function(res) {
    // $scope.ccdmodules = res.data.modulesccd1610;
    // $scope.res = res.data;
    // console.log(res.data);
    $scope.pageClass = 'page-ccd1610';
    // });
    $scope.site = ["site1", "site2"];
    $scope.ccdmodules = {};
    $scope.errorOccured = {};

    DataService.getComponentList(1610, "dev").then(function(response) {

        console.log($scope.releaseNumber + $scope.env);
        $scope.ccdmodules["dev"] = response.data.components;
        console.log(response.data);
        debugger;
    }, function errorCallback(error) {
        $scope.errorOccured["dev"] = true;
    });

    DataService.getComponentList(1610, "ist").then(function(response) {
        console.log($scope.releaseNumber + $scope.env);
        $scope.ccdmodules["ist"] = response.data.components;
        console.log(response.data);
        //populate $scope.ccdmodules["ist"]
        debugger;
    }, function errorCallback(error) {
        $scope.errorOccured["ist"] = true;
    });
    DataService.getComponentList(1610, "e2e").then(function(response) {
        console.log($scope.releaseNumber + $scope.env);
        $scope.ccdmodules["e2e"] = response.data.components;
        console.log(response.data)
        debugger;
        //populate $scope.ccdmodules["ist"]

    }, function errorCallback(error) {
        $scope.errorOccured["e2e"] = true;
    });
    DataService.getComponentList(1610, "pvt").then(function(response) {
        console.log($scope.releaseNumber + $scope.env);
        $scope.ccdmodules["pvt"] = response.data.components;
        //populate $scope.ccdmodules["ist"]
        debugger;

    }, function errorCallback(error) {
        $scope.errorOccured["pvt"] = true;
    });

}]);