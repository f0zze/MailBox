import angular from 'angular';
import uiRouter  from 'ui-router';
import mailbox from './mailbox';

angular.module('appMailbox', [
    uiRouter,
    mailbox.name
]);

console.log('bootstrap app.....');
