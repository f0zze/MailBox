import angular from 'angular';
import uiRouter from 'ui-router';
import boxComponent from './boxComponent';

let boxModule = angular.module('box', [
        uiRouter
    ])

    .config(($stateProvider) => {
        $stateProvider
            .state('mailbox.box', {
                url: '/:type',
                template: '<box></box>',
                controller:()=>{console.log('box...')}
            });
    })

    .component('box', boxComponent);

export default boxModule;