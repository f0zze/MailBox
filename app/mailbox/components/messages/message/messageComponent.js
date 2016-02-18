import template from './message.html';
import controller from './messageController';

let msgComponent = {
    restrict: 'E',
    bindings: {
        message:'@'
    },
    template,
    controller,
    controllerAs: 'msg'
};

export default msgComponent;