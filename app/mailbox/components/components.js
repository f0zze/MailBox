import angular from 'angular';

import Users from './users/_users';
import Box from './box/_box';

let componentModule = angular.module('mailbox.components', [
    Users.name,
    Box.name
]);

export default componentModule;