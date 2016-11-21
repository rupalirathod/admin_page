(function() {
    'use strict'; // i use this pattern to make is safe and so that no one can mess it up throught global scope.

    angular
        .module('app')
        .factory('DataService', DataService);

    DataService.$inject = ['$http', '$q']; //inject dependencies here

    function DataService($http, $q) {
        var service = { // if you come you will know how many methods we have in this service
            getComponentList: getComponentList,
            getLogFiles: getLogFiles,
            getEnvironmentsSummary: getEnvironmentsSummary
        };
        return service;

        function getEnvironmentsSummary() {

            var deferred = $q.defer();
            $http.get('http://mtanjv9ccda01.aic.cip.att.com:8445/initializeLoggerSystem').success(function(data) {

                deferred.resolve(data);
                console.log(data);
            })
            return deferred.promise;

        }

        function getComponentList(releaseNumber, env) {
            /* Replace by final endpoint passing releaseNumber and env as parameters*/
            return $http.get('http://vm-thsiung.client.research.att.com:3979/' + releaseNumber + '/' + env);
        }

        function getLogFiles(releaseNumber, env, component) {
            console.log(releaseNumber, env, component);
            /* Replace by final endpoint passing releaseNumber, env and component as parameters*/
            return $http.get('http://mtanjv9ccda01.aic.cip.att.com:8445/generateErrorLogs/' + releaseNumber + '/' + env.toUpperCase() + '/' + component.toLowerCase());

        }


    }
})();