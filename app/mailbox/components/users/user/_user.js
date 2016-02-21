import angular from 'angular';
import userComponent from './userComponent';

let userModule = angular.module('user', [])
    .component('user', userComponent);

export default userModule;