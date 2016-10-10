(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .factory('loginService', loginService);

    loginService.$inject = ['$http', '$q', 'localStorageService', 'envSettings', 'httpRequestService'];

    function loginService($http, $q, localStorageService, envSettings, httpRequestService) {

        var serviceBase = envSettings.apiServiceBaseUri;
        var loginServiceFactory = {};

        var authentication = {
            isAuth: false,
            userName: "",
            useRefreshTokens: true
        };

        var externalAuthData = {
            provider: "",
            userName: "",
            externalAccessToken: ""
        };

        function _getIPAddress() {
            var getObj = {
                method: 'GET',
                url: 'http://ipinfo.io/ip'
            };

            return httpRequestService.Go(getObj);
        }

        function _saveRegistration (registration) {

            _logOut();

            var postObj = {
                method: 'POST',
                url: serviceBase + 'api/account/register',
                data: registration
            }

            return httpRequestService.Go(postObj);
        };

        function _login(loginData) {

            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password +  "&client_id=" + envSettings.clientId;
            
            var postObj = {
                method: 'POST',
                url: serviceBase + 'token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: data
            }

            return httpRequestService.Go(postObj);

        };

        //var _login = function (loginData) {

        //    var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;

        //    if (loginData.useRefreshTokens) {
        //        data = data + "&client_id=" + ngAuthSettings.clientId;
        //    }

        //    var deferred = $q.defer();

        //    $http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

        //        if (loginData.useRefreshTokens) {
        //            localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName, refreshToken: response.refresh_token, useRefreshTokens: true });
        //        }
        //        else {
        //            localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.userName, refreshToken: "", useRefreshTokens: false });
        //        }
        //        _authentication.isAuth = true;
        //        _authentication.userName = loginData.userName;
        //        _authentication.useRefreshTokens = loginData.useRefreshTokens;

        //        deferred.resolve(response);

        //    }).error(function (err, status) {
        //        _logOut();
        //        deferred.reject(err);
        //    });

        //    return deferred.promise;

        //};

        function _loginSMTN(loginData) {
            var getObj = {
                method: 'GET',
                url: envSettings.smtnAPIServiceBaseUri + '/api/Account/AuthenticateUser?username=' + loginData.userName + '&password=' + loginData.password + '&currentIPAddress=' + loginData.currentIPAddress,
                headers: [{ 'Access-Control-Allow-Credentials': true }, { 'Access-Control-Allow-Origin': 'http://localhost:46081' }],
                data: loginData
            };

            return httpRequestService.Go(getObj);
        }

        function _logOut() {

            localStorageService.remove('authorizationData');

            authentication.isAuth = false;
            authentication.userName = "";
            authentication.useRefreshTokens = false;

        };

       function _fillAuthData () {

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                authentication.isAuth = true;
                authentication.userName = authData.userName;
                authentication.useRefreshTokens = authData.useRefreshTokens;
            }

        };

        function _refreshToken () {
            var authData = localStorageService.get('authorizationData');

            if (authData) {

                if (authData.useRefreshTokens) {

                    var data = "grant_type=refresh_token&refresh_token=" + authData.refreshToken + "&client_id=" + envSettings.clientId;

                    localStorageService.remove('authorizationData');

                    var postObj = {
                        method: 'POST',
                        url: serviceBase + 'token',
                        data: data,
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    };

                    return httpRequestService.Go(postObj);
                }
            }
        };

        function _obtainAccessToken (externalData) {

            var deferred = $q.defer();

            $http.get(serviceBase + 'api/account/ObtainLocalAccessToken', { params: { provider: externalData.provider, externalAccessToken: externalData.externalAccessToken } }).success(function (response) {

                localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: "", useRefreshTokens: false });

                authentication.isAuth = true;
                authentication.userName = response.userName;
                authentication.useRefreshTokens = false;

                deferred.resolve(response);

            }).error(function (err, status) {
                _logOut();
                deferred.reject(err);
            });

            return deferred.promise;

        };

        function _registerExternal(registerExternalData) {

            var deferred = $q.defer();

            $http.post(serviceBase + 'api/account/registerexternal', registerExternalData).success(function (response) {

                localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: "", useRefreshTokens: false });

                authentication.isAuth = true;
                authentication.userName = response.userName;
                authentication.useRefreshTokens = false;

                deferred.resolve(response);

            }).error(function (err, status) {
                _logOut();
                deferred.reject(err);
            });

            return deferred.promise;

        };

        loginServiceFactory.getIPAddress = _getIPAddress;
        loginServiceFactory.saveRegistration = _saveRegistration;
        loginServiceFactory.login = _login;
        loginServiceFactory.loginSMTN = _loginSMTN;
        loginServiceFactory.logOut = _logOut;
        loginServiceFactory.fillAuthData = _fillAuthData;
        loginServiceFactory.authentication = authentication;
        loginServiceFactory.refreshToken = _refreshToken;

        loginServiceFactory.obtainAccessToken = _obtainAccessToken;
        loginServiceFactory.externalAuthData = externalAuthData;
        loginServiceFactory.registerExternal = _registerExternal;

        return loginServiceFactory;
    };

})();