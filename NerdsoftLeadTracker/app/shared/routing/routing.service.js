(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .factory('routingService', routingService);

    routingService.$inject = ['$state'];

    function routingService($state) {
        return {
            Go: Go
        }

        function Go(route, reload)
        {
            function Go(route) {
                $state.go(route, { reload: reload });
            }
        }
    }

})();