(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .service('dashboardService', dashboardService);

    dashboardService.$inject = ['httpRequestService', 'envSettings'];

    function dashboardService(httpRequestService, envSettings) {

        return {
            loadDashboard: loadDashboard
        }

        //Sample submit function
        function loadDashboard() {
            var getObj = {
                method: 'GET',
                url: envSettings.apiServiceBaseUri + 'api/Dashboard'
            };

            return httpRequestService.Go(getObj);
        }
    }

})();