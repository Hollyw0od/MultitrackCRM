(function(){
  'use strict';

    angular.module('nerdsoftTracker')
    .run(['$templateCache', function ($templateCache) {
        $templateCache.put('partials/dashboard-menu-link.tmpl.html',
        '<md-button ng-class="{\'material-icons\' : true}" ui-sref-active="active" \n' +
        '  ui-sref="{{section.state}}" ng-click="focusSection()">\n' +
        '  {{section | humanizeDoc}}\n' +
        '  <span  class="menu-caption md-visually-hidden "\n' +
        '    ng-if="isSelected()">\n' +
        '    current page\n' +
        '  </span>\n' +
        '</md-button>\n' +
        '');
    }])
    .directive('dashboardMenuLink', function () {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'partials/dashboard-menu-link.tmpl.html',
        link: function ($scope, $element) {
          var controller = $element.parent().controller();

          $scope.focusSection = function () {
            controller.autoFocusContent = true;
          };
        }
      };
    })
})();