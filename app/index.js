import angular from 'angular'
import uiRouter from 'ui-router';

import routeConfig from './index.route';

import MailBox from './mailbox/test';
import mailbox from './mailbox/mailbox.module';

var app = angular.module('app', [
    uiRouter,
    mailbox
]).config(routeConfig);




