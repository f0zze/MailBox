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
        controllerAs: 'userCtrl',
        bindToController: true
    };

    function UserCtrl(Users) {

        this.onEditUser = () => {
            this.edit = true;
            this.editUser = angular.copy(this.user);
        };

        this.remove = () => {
            this.user.remove();
        }
    }
}