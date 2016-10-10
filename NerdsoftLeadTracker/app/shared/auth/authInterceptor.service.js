(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = ['$q', '$injector', '$location', 'localStorageService'];
    
    function authInterceptorService($q, $injector, $location, localStorageService, $state) {

        var authInterceptorServiceFactory = {};

        var _request = function (config) {

            config.headers = config.headers || {};

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            } 

            return config;
        }

        var _responseError = function (rejection) {
            if (rejection.status === 401) {
                var loginService = $injector.get('loginService');
                var authData = localStorageService.get('authorizationData');

                if (authData) {
                    if (authData.useRefreshTokens) {
                        $location.path('/refresh');
                        return $q.reject(rejection);
                    }
                }
                loginService.logOut();
                $location.path('/login');
            }
            return $q.reject(rejection);
        }

        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
    }
})();