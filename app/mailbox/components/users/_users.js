import angular from 'angular';
import uiRouter from 'ui-router';
import usersComponent from './usersComponent';

let usersModule = angular.module('users', [
        uiRouter
    ])

    .config(($stateProvider) => {
        $stateProvider
            .state('friends', {
                url: '/friends',
                template: '<users></users>'
            });
    })

    .component('users', usersComponent);

export default usersModule;