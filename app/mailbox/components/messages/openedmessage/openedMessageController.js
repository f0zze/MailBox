'use strict';

class OpenedMsgController {
    constructor($stateParams ) {
        alert($stateParams.id);
    }
}

export default OpenedMsgController;