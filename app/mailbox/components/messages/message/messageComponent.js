import template from './message.html';
import controller from './messageController';

let msgComponent = {
    bindings: {
        open:'&'
        //message:'@'
    },
    template,
    controller,
    controllerAs: 'msg'
};

export default msgComponent;