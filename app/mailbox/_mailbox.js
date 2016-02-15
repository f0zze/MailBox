import angular from 'angular';
import uiRouter from 'ui-router';
import MailboxRouter from './mailboxRouter';

const mailbox = angular.module('mailbox', [uiRouter]);
mailbox.config(()=>new MailboxRouter());

export default mailbox;


