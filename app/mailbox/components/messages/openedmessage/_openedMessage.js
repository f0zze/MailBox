import angular from 'angular';
import uiRouter from 'ui-router';
import openedMsgComponent from './openedMessageComponent';

let openedMsgModule = angular.module('openedMsg', [
    uiRouter
]).config(($stateProvider) => {
        $stateProvider
            .state('mailbox.message', {
                url: '/message/:id',
                template: '<opened-message></opened-message>'
            });
    })
    .component('openedMessage', openedMsgComponent);

export default openedMsgModule;