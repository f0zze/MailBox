import template from './message.html';
import controller from './messageController';

let msgComponent = {
    require: {
        messages: '^messages'
    },
    bindings: {
        open: '&'
        //message:'@'
    },
    template,
    controller,
    controllerAs: 'msg'
};

export default msgComponent;