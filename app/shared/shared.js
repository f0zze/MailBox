'use strict';

import angular from 'angular';
import SideNav from './sideNavigation/_sideNav';
import NavBar from './navigationBar/_navbar';

let sharedModule = angular.module('shared', [
    SideNav.name,
    NavBar.name
]);

export default sharedModule;
