import template from './messages.html';
import controller from './messagesController'

let messageComponent = {
    bindings: {},
    transclude: true,
    template,
    controller,
    controllerAs: 'messages'
};

export default messageComponent;