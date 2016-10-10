(function () {
    'use strict';

    var envSettings = {};

    if (window) {
        if (typeof Object.assign != 'function') {
            Object.assign = function (target) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                target = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source != null) {
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                }
                return target;
            };
        }

        Object.assign(envSettings, window.envSettings);
    }

    var nerdsoftTracker = angular.module('nerdsoftTracker', ['ngAnimate', 'ngMaterial', 'ngMessages', 'ui.router', 'ngAria', 'LocalStorageModule', 'ngCookies']);

    var serviceBase = 'http://localhost:61017/';

    nerdsoftTracker
        .constant('envSettings', envSettings)

    nerdsoftTracker.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider, $sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://localhost:26992/**',
            'http://localhost:42342/**'
        ]);


        //Routing - Move to new file once we start implementing

        $urlRouterProvider.otherwise('/Login');

        $stateProvider
            .state('Login', {
                url: '/Login',
                views: {
                    '@': {
                        templateUrl: 'app/components/login/login.html',
                        controller: 'login'
                    }
                }
            })
            .state('PasswordReset', {
                url: '/PasswordReset',
                views: {
                    '@': {
                        templateUrl: 'app/components/passwordReset/passwordreset.html',
                        controller: 'passwordReset'
                    }
                }
            })
            .state('Dashboard', {
                url: '/Dashboard',
                views: {
                    '@': {
                        templateUrl: 'app/components/dashboard/dashboard.html',
                        controller: 'dashboardMenu',
                        controllerAs: 'vm'
                    }
                }
            })
    })

    nerdsoftTracker.filter('nospace', function () {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    });

    nerdsoftTracker.filter('humanizeDoc', function () {
       return function (doc) {
           if (!doc) return;
           if (doc.type === 'directive') {
               return doc.name.replace(/([A-Z])/g, function ($1) {
                   return '-' + $1.toLowerCase();
               });
           }

           return doc.label || doc.name;
       };
   });

    nerdsoftTracker.config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    });

    nerdsoftTracker.run(['loginService', function (loginService) {
        loginService.fillAuthData();
    }]);
})();
