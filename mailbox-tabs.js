(function () {
    'use strict';

    angular.module('mailbox').directive('mailTabs', MailTabs);

    function MailTabs() {
        return {
            restrict:'E',
            templateUrl:'mailbox-tabs.html'
        }
    }
})();
