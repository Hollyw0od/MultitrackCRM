(function () {
    'use strict';

    angular
        .module('nerdsoftTracker')
        .factory('httpRequestService', httpRequestService);

    httpRequestService.$inject = ['$q', '$http'];

    function httpRequestService($q, $http) {

        return {
            Go: Go
        }

        function Go(object) {
            return _getHttpRequestPromise(object);
        }

        function _getHttpRequestPromise(object) {
            var deferredObject = $q.defer();
            $http(object).success(function (data) {
                deferredObject.resolve(data);
            }).error(function (data) {
                deferredObject.reject(data);
            });

            return deferredObject.promise;
        }
    }
})();