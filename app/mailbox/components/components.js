import angular from 'angular';

import Users from './users/_users';
import Box from './box/_box';
import Messages from './messages/_messages';

let componentModule = angular.module('mailbox.components', [
    Users.name,
    Box.name,
    Messages.name
]);

export default componentModule;