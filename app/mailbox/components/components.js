import angular from 'angular';
import Users from './users/_users';
import Nav from './navigation/_nav';

let componentModule = angular.module('mailbox.components', [
    Users.name,
    Nav.name
]);

export default componentModule;