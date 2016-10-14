(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('DataService', DataService);

    DataService.$inject = ['$http'];

    function DataService($http) {
        var service = {
            getComponentList: getComponentList,
            getLogFiles: getLogFiles
        };

        return service;

        function getComponentList(releaseNumber, env) { 
            /* Replace by final endpoint passing releaseNumber and env as parameters*/
            return $http.get('json_samples/componentList.json');
        }
        
        function getLogFiles(releaseNumber, env, component) { 
            /* Replace by final endpoint passing releaseNumber, env and component as parameters*/
            return $http.get('json_samples/logFiles.json');
            // return $http.get('http://whatever.com/something?releaseNumber=' + releaseNumber);
        }

    }
})();