(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .controller('refreshController', refreshController)

    refreshController.$inject = ['$scope', '$location', 'loginService', 'localStorageService', 'routingService']

    function refreshController($scope, $location, loginService, localStorageService, routingService) {
        var vm = $scope;

        vm.authentication = loginService.authentication;
        vm.tokenRefreshed = false;
        vm.tokenResponse = null;

        vm.refreshToken = function () {
            var refreshTokenPromise = loginService.refreshToken()

            refreshTokenPromise.then(function (response) {
                localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: response.refresh_token, useRefreshTokens: true });
                vm.tokenRefreshed = true;
                vm.tokenResponse = response;;
            }).catch(function (err) {
                loginService.logOut();
                routingService.Go("Login");
            });
        };

    }

})();