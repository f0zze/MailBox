angular.module('users').directive('user', User);

function User() {
    return {
        restrict: 'E',
        templateUrl: './users/user/user.tpl.html',
        scope: {
            user: '=',
            edit: '='
        },
        controller: UserCtrl,
        controllerAs: 'user',
        bindToController: true
    };

    function UserCtrl() {

    }
}