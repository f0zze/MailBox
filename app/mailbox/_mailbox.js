'use strict';

import angular from 'angular';
import uiRouter from 'ui-router';

import {MailboxConfig} from './mailboxConfig.js'
import {MailboxRun} from './mailboxRun.js';
import MailboxComponent from './mailboxComponent'
import Components from './components/components';

let mailbox = angular.module('mailbox', [
        uiRouter,
        Components.name
    ])
    .config(($stateProvider) => {
        $stateProvider
            .state('mailbox', {
                url: '/',
                template: '<mailbox></mailbox>',
                controller:()=>{console.log('run....')}
            });
    });


export default mailbox;


