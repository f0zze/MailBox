const angular = require('angular');
const uiRouter = require('ui-router');

const _mailbox = require('./mailbox');

var mainModule = angular.module('appMailbox', [uiRouter, _mailbox]);
