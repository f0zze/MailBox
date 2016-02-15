import angular from 'angular';
import uiRouter from 'ui-router';

angular.module('mailbox', [uiRouter])
    .config(($stateProvider, $urlRouterProvider)=> {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('mailbox', {
                url: "/",
                templateUrl: "mailbox/mailbox.html",
                controller:()=>{
                    alert('i am in!!');
                }
            })
    });
