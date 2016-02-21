import angular from 'angular';
import uiRouter from 'ui-router';
import messagesComponent from './messagesComponent';
import msgComponent from './message/_message';
import openedMsgComponent from './openedmessage/_openedMessage';

let messagesModule = angular.module('messages', [
        uiRouter,
        msgComponent.name,
        openedMsgComponent.name
    ])
    .component('messages', messagesComponent)

export default messagesModule;