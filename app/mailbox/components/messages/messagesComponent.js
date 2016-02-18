import template from './messages.html';
import controller from './messagesController'

let messageComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'messages'
};

export default messageComponent;