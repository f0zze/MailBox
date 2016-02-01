angular.module('users').directive('editUser', EditUser);

function EditUser() {
    return {
        restrict: 'E',
        templateUrl:'./users/edit/edit.tpl.html',
        scope: {
            user:'=',
            edit:'='
        },
        controller: UsersEditCtrl,
        controllerAs: 'editUser',
        bindToController:true
    };

    function UsersEditCtrl() {

        this.update = function(user) {
            //User.save(user);
            console.log(user);
        }

    }
}