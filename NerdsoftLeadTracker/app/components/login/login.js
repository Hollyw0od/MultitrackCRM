(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .controller('login', login);

    login.$inject = ['$scope', '$location', 'loginService', 'envSettings', 'routingService', '$state', 'localStorageService', '$cookieStore'];

    function login($scope, $location, loginService, envSettings, routingService, $state, localStorageService, $cookieStore) {
        var vm = $scope;
        vm.currentIPAddress = '';

        var getIPAddressPromise = loginService.getIPAddress();

        getIPAddressPromise.then(function (data) {
            vm.loginData.currentIPAddress = data.trim();
        }).catch(function (err) {
            console.log(err);
        });

        vm.loginData = {
            userName: "",
            password: "",
            useRefreshTokens: true,
            currentIPAddress: "",
            clientId: envSettings.clientId
        };

        vm.message = "";

        vm.login = function () {
            var loginPromise = loginService.login(vm.loginData);
            //var smtnLoginPromise = loginService.loginSMTN(vm.loginData);

            loginPromise.then(function (response) {

                if (vm.loginData.useRefreshTokens) {
                    localStorageService.set('authorizationData', { token: response.access_token, userName: vm.loginData.userName, refreshToken: response.refresh_token, useRefreshTokens: true });
                }
                else {
                    localStorageService.set('authorizationData', { token: response.access_token, userName: vm.loginData.userName, refreshToken: "", useRefreshTokens: false });
                }

                loginService.authentication.isAuth = true;
                loginService.authentication.userName = vm.loginData.userName;
                loginService.authentication.useRefreshTokens = vm.loginData.useRefreshTokens;
                $state.go('Dashboard');

                //Revisit when we re-implement login functionality
                //smtnLoginPromise.then(function () {
                        
                //}).catch(function (smtnErr) {
                //    vm.message = smtnErr.error_description;
                //});

            }).catch(function (err) {
                vm.message = err.error_description;
            });
        };

        vm.authExternalProvider = function (provider) {

            var redirectUri = location.protocol + '//' + location.host + '/authcomplete.html';

            var externalProviderUrl = envSettings.apiServiceBaseUri + "api/Account/ExternalLogin?provider=" + provider
                                                                        + "&response_type=token&client_id=" + envSettings.clientId
                                                                        + "&redirect_uri=" + redirectUri;
            window.$windowScope = vm;

            var oauthWindow = window.open(externalProviderUrl, "Authenticate Account", "location=0,status=0,width=600,height=750");
        };

        vm.authCompletedCB = function (fragment) {

            vm.$apply(function () {

                if (fragment.haslocalaccount == 'False') {

                    loginService.logOut();

                    loginService.externalAuthData = {
                        provider: fragment.provider,
                        userName: fragment.external_user_name,
                        externalAccessToken: fragment.external_access_token
                    };

                    routingService.Go('Dashboard', false);

                }
                else {
                    //Obtain access token and redirect to orders
                    var externalData = { provider: fragment.provider, externalAccessToken: fragment.external_access_token };
                    loginService.obtainAccessToken(externalData).then(function (response) {

                        routingService.Go('Dashboard', false);

                    },
                 function (err) {
                     vm.message = err.error_description;
                 });
                }

            });
        }
    };
})();