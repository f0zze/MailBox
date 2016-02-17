import template from './users.html';
import usersController from './usersController';

let navComponent = {
    restrict: 'E',
    bindings: {},
    template,
    usersController,
    controllerAs: 'users'
};

export default navComponent;