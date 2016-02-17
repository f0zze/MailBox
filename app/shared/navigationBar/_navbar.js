'use strict';

import angular from 'angular';
import uiRouter from 'ui-router';
import NavBarComponent from './navbarComponent'

let navBarModule = angular.module('navBar', [uiRouter])
    .component('navBar', NavBarComponent);

export default navBarModule;
