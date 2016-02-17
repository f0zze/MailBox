import template from './nav.html';
import navController from './navController';

let navComponent = {
    restrict: 'E',
    bindings: {},
    template,
    navController,
    controllerAs: 'nav'
};

export default navComponent;