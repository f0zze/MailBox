import template from './nav.html';
import controller from './navController';

let navComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'nav'
};

export default navComponent;