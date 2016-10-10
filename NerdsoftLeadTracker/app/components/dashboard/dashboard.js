(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .controller('dashboard', dashboard);

    dashboard.$inject = ['$scope', 'dashboardService', 'dashboardMenu', 'toastService', 'routingService', 'envSettings', '$cookieStore'];

    function dashboard($scope, dashboardService, dashboardMenu, toastService, routingService, envSettings, $cookieStore) {
        var vm = $scope;
        vm.testData = {};
        
    }
})();