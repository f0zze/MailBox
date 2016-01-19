(function () {
    'use strict';

    angular.module('mailbox', []).directive('mailbox', MailBox);

    function MailBox() {
        return {
            restrict: 'E',
            templateUrl: 'mailbox.html'
        }
    }
})();

