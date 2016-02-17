import template from './box.html';
import boxController from './boxController';

let boxComponent = {
    restrict: 'E',
    bindings: {},
    template,
    boxController,
    controllerAs: 'box'
};

export default boxComponent;