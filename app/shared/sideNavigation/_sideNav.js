import angular from 'angular';
import sideNavComponent from './navComponent';

let navModule = angular.module('nav', [])
    .component('nav', sideNavComponent);

export default navModule;