import template from './box.html';
import controller from './boxController';

let boxComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'box'
};

export default boxComponent;