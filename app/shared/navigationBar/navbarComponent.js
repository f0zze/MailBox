import template from './navbar.html';
import controller from './navbarController';

let NavBarComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'navbar'
};

export default NavBarComponent;