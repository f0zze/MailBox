import angular from 'angular';
import MailBox from './test';
import MailboxRouterConfig from './mailbox.router';

const mailboxModule  =  angular.module('mailbox',[]);

mailboxModule
    .directive('mailbox',()=>new MailBox())
    .config(MailboxRouterConfig);

//exports "mailbox" name of the module
export default mailboxModule.name;