angular.module('users').directive('editUser', EditUser);

function EditUser() {
    return {
        restrict: 'E',
        templateUrl: './users/edit/user-edit.tpl.html',
        scope: {
            user: '=',
            edit: '='
        },
        controller: UsersEditCtrl,
        controllerAs: 'editUser',
        bindToController: true
    };

    function UsersEditCtrl(Users) {
        this.update = () => {
            Users.customPUT(this.user);
        }

    }
}