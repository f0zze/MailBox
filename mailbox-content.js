(function () {
    'use strict';

    angular.module('mailbox').directive('mailContent', MailContent);

    function MailContent() {
        return {
            restrict: 'E',
            templateUrl: 'mailbox-content.html'
        }
    }
})();
