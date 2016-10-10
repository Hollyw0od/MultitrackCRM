(function(){
  'use strict';

    angular
        .module('nerdsoftTracker')
        .controller('dashboardMenu', dashboardMenu)
        
    dashboardMenu.$inject =['$rootScope','$log','$state','$timeout','$location','dashboardMenuService'];     
    
    function dashboardMenu ($rootScope, $log, $state, $timeout, $location, dashboardMenuService) {

        var vm = this;

        //functions for menu-link and menu-toggle
        vm.isOpen = isOpen;
        vm.toggleOpen = toggleOpen;
        vm.autoFocusContent = false;
        vm.menu = dashboardMenuService;
        vm.searchType = 1;

        vm.status = {
          isFirstOpen: true,
          isFirstDisabled: false
        };

        vm.onChangeSearchType = onChangeSearchType;
        //var loadDashboardPromise = dashboardMenuService.loadDashboard();

        //loadDashboardPromise.then(function () {
        //    console.log("logged in");
        //}).catch(function (err) {
        //    console.log(err);
        //});

        function onChangeSearchType() {
            console.log(vm.searchType);
        }

        function isOpen(section) {
            return dashboardMenuService.isSectionSelected(section);
        }

        function toggleOpen(section) {
            dashboardMenuService.toggleSelectSection(section);
        }

      }
})();