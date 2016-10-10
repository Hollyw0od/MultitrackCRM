(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .factory('toastService', toastService);

    toastService.$inject = ['$mdToast'];

    function toastService($mdToast) {
        return {
            showSimpleToast: showSimpleToast
        };

        function getToastPosition() {
            var toastPos = { bottom: false, top: true, left: true, right: false };
            var toastPosition = angular.extend({}, toastPos);
            return Object.keys(toastPosition).filter(function (pos) { return toastPosition[pos] }).join(' ');
        };

        function showSimpleToast(text) {
            var pinTo = getToastPosition();

            $mdToast.show(
                $mdToast.simple()
                    .textContent(text)
                    .position(pinTo)
                    .hideDelay(3000)
                );
        };

    }
})();