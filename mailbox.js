(function () {
    'use strict';

    angular.module('mailbox', ['restangular','users']).directive('mailbox', MailBox);

    function MailBox() {
        return {
            restrict: 'E',
            templateUrl: 'mailbox.html'
        }
    }
})();

