'use strict';

class MessagesController {

    constructor($state) {
        this._$state = $state;
    }

    open(msgId) {
        this._$state.go('mailbox.message', {"id": msgId})
    }
}

export default MessagesController;