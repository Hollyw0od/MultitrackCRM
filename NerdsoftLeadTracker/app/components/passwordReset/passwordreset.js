(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .controller('passwordReset', passwordReset);

        passwordReset.$inject = ['$scope', '$location', 'envSettings', 'routingService', '$state', 'localStorageService', '$cookieStore'];

        function passwordReset($scope, $location, envSettings, routingService, $state, localStorageService, $cookieStore) {
        }

})();
