(function () {
    'use strict';

    angular.module('mailbox').directive('mailNav', MailNav);

    function MailNav() {
        return {
            restrict:'E',
            templateUrl:'mailbox-nav.html'
        }
    }
})();
