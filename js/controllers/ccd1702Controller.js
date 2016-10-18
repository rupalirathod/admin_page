app.controller('ccd1702Controller', ['$scope', '$http', function($scope, $http) {
    $http.get('ccd_1702_module.json')
        .then(function(res) {
            $scope.ccdmodules = res.data.modulesccd1702;
            $scope.pageClass = 'page-ccd1702';
        });
}])