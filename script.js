var app = angular.module('app', ['ngMaterial', 'ui.router', 'toggle-switch', 'ui.grid']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('/', {
            url: "/",
            templateUrl: "/index.html"
        })
        .state('home', {
            url: "/home",
            templateUrl: "/home.html",
            controller: 'homeController'
        })
        .state('1607', {
            url: "/1607",
            templateUrl: "../views/ccd_1607.html",
            controller: 'ccd1607Controller'
        })
        .state('1610', {
            url: "/1610",
            templateUrl: "../views/ccd_1610.html",
            controller: 'ccd1610Controller'
        })
        .state('1702', {
            url: "/1702",
            templateUrl: "../views/ccd_1702.html",
            controller: 'ccd1702Controller'
        })
        .state('logs', {
            // url: "/logs/:releaseNumber/:env/:siteOption",
            url: "/logs/:releaseNumber/:env",
            controller: 'logsController',
            templateUrl: "../views/logs.html"
        })

    .state('logs.component', {
            url: "/:component",
            controller: 'componentsController',
            templateUrl: "../views/component.html"
        })
        .state('raws', {
            url: "/:eventTime/:releaseNumber/:env/:component",
            controller: 'rawController',
            templateUrl: "../views/raw.html"
        })

    /*
    .state('logs.component',{
        url: "logs/:releaseNumber/:env/:component",
        controller: 'logsController',
        templateUrl: "../views/logs.html"
    })
    .state('logs',{
        url: "logs/:releaseNumber/:env",
        controller: 'logsController',
        templateUrl: "../views/logs.html"
    })*/
    ;


})

// app.controller('homeController', ['$scope', '$http', function($scope, $http) {

// }]);

// app.controller('ccd1607Controller', ['$scope', '$http', function($scope, $http) {
//     // $http.get('ccd_1607_module.json')
//     //     .then(function(res) {
//     //         $scope.ccdmodules = res.data.modulesccd1607;
//     //         $scope.pageClass = 'page-ccd1607';
//     //     });
//     // $scope.flip = true;
//     // $scope.siteOption = true;
//     // $scope.toggleSiteOption = function() {

//     //     $scope.siteOption = $scope.siteOption === false ? true : false;

//     // };
//     // $scope.flipOption = function() {
//     //     $scope.flip = $scope.flip === false ? true : false;
//     // }

// }]);
// app.controller('ccd1610Controller', function($scope, $http) {
//     // $http.get('ccd_1610_module.json')
//     //     .then(function(res) {
//     //         $scope.ccdmodules = res.data.modulesccd1610;
//     //         $scope.pageClass = 'page-ccd1610';
//     //     });
//     // $scope.flip = true;
//     // $scope.siteOption = true;
//     // $scope.toggleSiteOption = function() {

//     //     $scope.siteOption = $scope.siteOption === false ? true : false;

//     // };
//     // $scope.flipOption = function() {
//     //     $scope.flip = $scope.flip === false ? true : false;
//     // }

// });
// app.controller('ccd1702Controller', function($scope, $http) {
//     // $http.get('ccd_1702_module.json')
//     //     .then(function(res) {
//     //         $scope.ccdmodules = res.data.modulesccd1702;
//     //         $scope.pageClass = 'page-ccd1702';
//     //     });
//     // $scope.flip = true;
//     // $scope.siteOption = true;
//     // $scope.toggleSiteOption = function() {

//     //     $scope.siteOption = $scope.siteOption === false ? true : false;

//     // };
//     // $scope.flipOption = function() {
//     //     $scope.flip = $scope.flip === false ? true : false;
//     // }
// });