import template from './navbar.html';
import NavBarController from './navbarController';

let NavBarComponent = {
    restrict: 'E',
    bindings: {},
    template,
    NavBarController,
    controllerAs: 'navbar'
};

export default NavBarComponent;