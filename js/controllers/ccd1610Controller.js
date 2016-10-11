angular.module(myApp.controllers)
    .controller('ccd1610Controller', ['$scope', '$http', function($scope, $http) {
        $http.get('ccd_1610_module.json')
            .then(function(res) {
                $scope.res = res.data;
                console.log(res.data);
            });

    }]);