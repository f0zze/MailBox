angular.module('users').directive('newUser', NewUser);

function NewUser() {
    return {
        restrict: 'E',
        templateUrl: './users/new/user-new.tpl.html',
        scope: {
            userList: '='
        },
        controller: NewUserCtrl,
        controllerAs: 'newUser',
        bindToController: true
    };

    function NewUserCtrl(Users) {
        this.save = (user) => {
            Users.post(user).then((data) => {
                this.userList.push(data);
                this.user = {};
            });
        }
    }
}