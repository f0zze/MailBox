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

        this.cancel = () => {
            this.edit = false;
            this.clone = this.user;
        };

        this.update = () => {
            console.dir(Users);
            Users.customPUT(this.user);
        }

    }
}