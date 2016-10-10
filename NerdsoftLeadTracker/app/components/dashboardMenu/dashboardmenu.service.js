(function () {

    'use strict';

    angular
        .module('nerdsoftTracker')
        .factory('dashboardMenuService', dashboardMenuService);

    dashboardMenuService.$inject = ['httpRequestService', 'envSettings'];

    function dashboardMenuService(httpRequestService, envSettings) {

        var sections = [];

        sections.push({
            name: 'Dashboard',
            type: 'toggle',
            pages: [{
                name: 'Appt Schedule',
                type: 'link',
                state: 'dash.appt.schedule'
            }, {
                name: 'Webinar Tracking',
                state: 'dash.webinar.tracking',
                type: 'link'
            }, {
                name: 'Outbound Calling',
                state: 'dash.outbound.calling',
                type: 'link'
            }, {
                name: 'Outbound Management',
                state: 'dash.outbound.management',
                type: 'link'
            }, {
                name: 'Collection Manager',
                state: 'dash.collection.manager',
                type: 'link'
            }, {
                name: 'Lead Management',
                state: 'dash.lead.management',
                type: 'link'
            }, {
                name: 'Offer Management',
                state: 'dash.offer.management',
                type: 'link'
            }, {
                name: 'Ad Management',
                state: 'dash.ad.management',
                type: 'link'
            }, {
                name: 'Calendar',
                state: 'dash.calendar',
                type: 'link'
            }, {
                name: 'Agent Access',
                state: 'dash.agent.access',
                type: 'link'
            }, {
                name: 'Agent Management',
                state: 'dash.agent.management',
                type: 'link'
            }, {
                name: 'Resources',
                state: 'dash.resources',
                type: 'link'
            }, {
                name: 'CJT Inventory',
                state: 'dash.cjt.inventory',
                type: 'link'
            }, {
                name: 'Property Advanced Search',
                state: 'dash.prop.adv',
                type: 'link'
            }, {
                name: 'Auto Moves',
                state: 'dash.auto.moves',
                type: 'link'
            }]
        });

        sections.push({
            name: 'Buyer Leads',
            type: 'toggle',
            pages: [{
                name: 'New Lead',
                type: 'link',
                state: 'dash.buyer.showNewLead'
            }, {
                name: 'Attempting to Contact 1',
                state: 'dash.buyer.attempt1',
                type: 'link'
            }, {
                name: 'Attempting to Contact 2',
                state: 'dash.buyer.attempt2',
                type: 'link'
            }, {
                name: 'Attempting to Contact 3',
                state: 'dash.buyer.attempt3',
                type: 'link'
            }, {
                name: 'Final Attempt to Contact',
                state: 'dash.buyer.finalattempt',
                type: 'link'
            }, {
                name: 'Open Lead',
                state: 'dash.buyer.openlead',
                type: 'link'
            }, {
                name: 'In Sales Process',
                state: 'dash.buyer.insales',
                type: 'link'
            }, {
                name: 'Appointment to Close',
                state: 'dash.buyer.closeappt',
                type: 'link'
            }, {
                name: 'Work Page/Pending Contracts',
                state: 'dash.buyer.workpage',
                type: 'link'
            }, {
                name: 'Sold',
                state: 'dash.buyer.sold',
                type: 'link'
            }, {
                name: 'Potential Renter',
                state: 'dash.buyer.potentialrenter',
                type: 'link'
            }, {
                name: 'Procurement',
                state: 'dash.buyer.procurement',
                type: 'link'
            }, {
                name: 'FSBO Owner Contacted',
                state: 'dash.buyer.fsbocontacted',
                type: 'link'
            }]
        });

        sections.push({
            name: 'Seller Leads',
            type: 'toggle',
            pages: [{
                name: 'New Lead',
                type: 'link',
                state: 'dash.seller.showNewLead'
            }, {
                name: 'Attempting to Contact 1',
                state: 'dash.seller.attempt1',
                type: 'link'
            }, {
                name: 'Attempting to Contact 2',
                state: 'dash.seller.attempt2',
                type: 'link'
            }, {
                name: 'Attempting to Contact 3',
                state: 'dash.seller.attempt3',
                type: 'link'
            }, {
                name: 'Final Attempt to Contact',
                state: 'dash.seller.finalattempt',
                type: 'link'
            }, {
                name: 'Open Lead',
                state: 'dash.seller.openlead',
                type: 'link'
            }, {
                name: 'In Sales Process',
                state: 'dash.seller.insales',
                type: 'link'
            }, {
                name: 'Appointment to Close',
                state: 'dash.seller.closeappt',
                type: 'link'
            }, {
                name: 'Work Page/Pending Contracts',
                state: 'dash.seller.workpage',
                type: 'link'
            }, {
                name: 'Sold',
                state: 'dash.seller.sold',
                type: 'link'
            }, {
                name: 'Potential Renter',
                state: 'dash.seller.potentialrenter',
                type: 'link'
            }, {
                name: 'Procurement',
                state: 'dash.seller.procurement',
                type: 'link'
            }, {
                name: 'FSBO Owner Contacted',
                state: 'dash.seller.fsbocontacted',
                type: 'link'
            }]
        });

        sections.push({
            name: 'Renter Leads',
            type: 'toggle',
            pages: [{
                name: 'New Lead',
                type: 'link',
                state: 'dash.renter.showNewLead'
            }, {
                name: 'Attempting to Contact 1',
                state: 'dash.renter.attempt1',
                type: 'link'
            }, {
                name: 'Attempting to Contact 2',
                state: 'dash.renter.attempt2',
                type: 'link'
            }, {
                name: 'Attempting to Contact 3',
                state: 'dash.renter.attempt3',
                type: 'link'
            }, {
                name: 'Final Attempt to Contact',
                state: 'dash.renter.finalattempt',
                type: 'link'
            }, {
                name: 'Open Lead',
                state: 'dash.renter.openlead',
                type: 'link'
            }, {
                name: 'In Sales Process',
                state: 'dash.renter.insales',
                type: 'link'
            }, {
                name: 'Appointment to Close',
                state: 'dash.renter.closeappt',
                type: 'link'
            }, {
                name: 'Work Page/Pending Contracts',
                state: 'dash.renter.workpage',
                type: 'link'
            }, {
                name: 'Sold',
                state: 'dash.renter.sold',
                type: 'link'
            }, {
                name: 'Potential Renter',
                state: 'dash.renter.potentialrenter',
                type: 'link'
            }, {
                name: 'Procurement',
                state: 'dash.renter.procurement',
                type: 'link'
            }, {
                name: 'FSBO Owner Contacted',
                state: 'dash.renter.fsbocontacted',
                type: 'link'
            }]
        });

        var self;

        function loadDashboard() {
            var getObj = {
                method: 'GET',
                url: envSettings.apiServiceBaseUri + 'api/Dashboard'
            };

            return httpRequestService.Go(getObj);
        };



        return self = {
            sections: sections,

            toggleSelectSection: function (section) {
                self.openedSection = (self.openedSection === section ? null : section);
            },

            isSectionSelected: function (section) {
                return self.openedSection === section;
            },

            selectPage: function (section, page) {
                //page && page.url && $location.path(page.url);
                self.currentSection = section;
                self.currentPage = page;
            },

            loadDashboard: loadDashboard
        };

        function sortByHumanName(a, b) {
            return (a.humanName < b.humanName) ? -1 :
              (a.humanName > b.humanName) ? 1 : 0;
        }

    }

})();