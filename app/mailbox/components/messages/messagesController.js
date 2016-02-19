'use strict';

class MessagesController {

    constructor() {
        this.msg = "Messages Controller";
    }

    openMessage(id) {
        alert('Open Message '+id);
    }
}

export default MessagesController;