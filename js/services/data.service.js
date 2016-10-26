(function() {
    'use strict';

    angular
        .module('app')
        .factory('DataService', DataService);

    DataService.$inject = ['$http'];

    function DataService($http) {
        var service = {
            getComponentList: getComponentList,
            getLogFiles: getLogFiles
                // getConfigOfCompEnv: getConfigOfCompEnv

        };

        return service;

        function getComponentList(releaseNumber, env) {
            /* Replace by final endpoint passing releaseNumber and env as parameters*/
            return $http.get('http://vm-thsiung.client.research.att.com:3979/' + releaseNumber + '/' + env);
        }

        // function getConfigOfCompEnv(releaseNumber, env, component) {
        //     return $http.get('smaple.json');
        // }
        // function siteOption(releaseNumber, env, siteOption) {

        // }
        //   function getLogFiles(releaseNumber, env, siteOption, component) {
        //             console.log(releaseNumber, env, siteOption, component);
        function getLogFiles(releaseNumber, env, component) {
            console.log(releaseNumber, env, component);
            /* Replace by final endpoint passing releaseNumber, env and component as parameters*/
            return $http.get('http://mtanjv9ccda01.aic.cip.att.com:8445/generateErrorLogs/' + releaseNumber + '/' + env.toUpperCase() + '/' + component.toLowerCase());
            // if (siteOption == "e2e" || siteOption == "ist");
            // return ($http.get('http://mtanjv9ccda01.aic.cip.att.com:8445/generateErrorLogs/' + releaseNumber + '/' + env + '1' + '/' + component) && $http.get('http://mtanjv9ccda01.aic.cip.att.com:8445/generateErrorLogs/' + releaseNumber + '/' + env + '2' + '/' + component));
            // else
            //     return $http.get('http://mtanjv9ccda01.aic.cip.att.com:8445/generateErrorLogs/' + releaseNumber + '/' + env + '/' + component)
            //         // return $http.get('http://whatever.com/something?releaseNumber=' + releaseNumber);
        }

        function getRawFiles(releaseNumber, env, component, eventTime) {
            /* Replace by final endpoint passing releaseNumber and env as parameters*/
            return $http.get('http://mtanjv9ccda01.aic.cip.att.com:8445/generateRawLogs/' + eventTime + '/' + releaseNumber + '/' + env.toUpperCase() + '/' + component.toLowerCase());
            debugger;
        }

    }
})();