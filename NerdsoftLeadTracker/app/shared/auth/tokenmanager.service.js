(function () {
    'use strict';
    angular
        .module('nerdsoftTracker')
        .factory('tokensManagerService', tokensManagerService);
        
    tokensManagerService.$inject = ['$http', 'envSettings'];
    
    function tokensManagerService($http, envSettings) {

        var serviceBase = envSettings.apiServiceBaseUri;

        var tokenManagerServiceFactory = {};

        var _getRefreshTokens = function () {

            return $http.get(serviceBase + 'api/refreshtokens').then(function (results) {
                return results;
            });
        };

        var _deleteRefreshTokens = function (tokenid) {

            return $http.delete(serviceBase + 'api/refreshtokens/?tokenid=' + tokenid).then(function (results) {
                return results;
            });
        };

        tokenManagerServiceFactory.deleteRefreshTokens = _deleteRefreshTokens;
        tokenManagerServiceFactory.getRefreshTokens = _getRefreshTokens;

        return tokenManagerServiceFactory;

    };
})();