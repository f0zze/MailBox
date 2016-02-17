import angular from 'angular';
import navComponent from './navComponent';

let navModule = angular.module('nav', [])
    .component('nav', navComponent);

export default navModule;