import angular from 'angular';
import uiRouter from 'ui-router';

import User from './user/_user'
import usersComponent from './usersComponent';

let usersModule = angular.module('users', [
        uiRouter,
        User.name
    ])

    .config(($stateProvider) => {
        $stateProvider
            .state('mailbox.friends', {
                url: '/friends',
                template: '<users></users>'
            });
    })

    .component('users', usersComponent);

export default usersModule;