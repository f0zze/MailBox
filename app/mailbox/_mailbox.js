'use strict';

import angular from 'angular';
import uiRouter from 'ui-router';
import SharedModule from '../shared/shared';
import ComponentsModule from './components/components';

//Main Component
import MailboxComponent from './mailboxComponent'

let mailbox = angular.module('mailbox', [
    uiRouter,
    ComponentsModule.name,
    SharedModule.name
]).component('mailbox', MailboxComponent)
    .config(($stateProvider,$urlRouterProvider) => {

        $urlRouterProvider.otherwise('/mailbox/inbox');
        $stateProvider
            .state('mailbox', {
                abstract: true,
                url: '/mailbox',
                template: '<mailbox></mailbox>',
                controller: ()=> {
                    console.log('run....')
                }
            });
    });

export default mailbox;


