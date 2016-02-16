'use strict';

const angular = require('angular');
const uiRouter = require('ui-router');

const MailboxConfig = require('./mailbox.config');
import { MailboxRun } from './mailbox.run';

console.log('sdad');
console.log(MailboxRun);
console.log(new MailboxRun);



angular.module('mailbox', [uiRouter])

    .run(MailboxRun);


module.exports = 'mailbox';


