app.controller('ccd1610Controller', ['$scope', '$http', function($scope, $http) {
    $http.get('ccd_1610_module.json')
        .then(function(res) {
            $scope.ccdmodules = res.data.modulesccd1610;
            $scope.res = res.data;
            console.log(res.data);
            $scope.pageClass = 'page-ccd1610';
        });

}]);