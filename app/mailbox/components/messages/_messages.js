import angular from 'angular';
import uiRouter from 'ui-router';
import messagesComponent from './messagesComponent';
import msgComponent from './message/_message';

let messagesModule = angular.module('messages', [
        uiRouter,
        msgComponent.name
    ])
    .component('messages', messagesComponent)

export default messagesModule;