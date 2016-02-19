import angular from 'angular';
import sideNavComponent from './navComponent';

let navModule = angular.module('nav', [])
    .component('sideNav', sideNavComponent);

export default navModule;