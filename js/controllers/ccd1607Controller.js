app.controller('ccd1607Controller', ['$scope', '$http', '$stateParams', 'DataService', function($scope, $http, $stateParams, DataService) {

    $scope.pageClass = 'page-ccd1607';
    $scope.releaseNumber = $stateParams.releaseNumber;
    $scope.env = $stateParams.env;
    $scope.component = $stateParams.component;
    DataService.getComponentList($scope.releaseNumber, $scope.env).then(function(response) {
        console.log($scope.releaseNumber + $scope.env);
    })

}])