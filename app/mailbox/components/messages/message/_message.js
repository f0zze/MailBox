import angular from 'angular';
import msgComponent from './messageComponent';

let messageModule = angular.module('message', [])
    .component('message', msgComponent);

export default messageModule;