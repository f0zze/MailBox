angular.module('users').directive('editUser', EditUser);

function EditUser() {
    return {
        restrict: 'E',
        templateUrl:'./users/edit/edit.tpl.html',
        scope: {
            user:'='
        },
        controller: UsersEditCtrl,
        controllerAs: 'editUser'
    };

    function UsersEditCtrl() {

    }
}