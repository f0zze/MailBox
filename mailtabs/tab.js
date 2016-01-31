(function () {
    'use strict';

    angular.module('mailbox').directive('tab', Tab);

    function Tab() {
        return {
            restrict: 'E',
            scope: {
                tabName: '@',
                icon: '@'
            },
            templateUrl: 'mailtabs/tab.tpl.html',
            controller: TabController,
            controllerAs: 'tabCtrl',
            bindToController: true
        };

        function TabController() {
        }
    }

})();