angular.module('users').directive('newUser', NewUser);

function NewUser() {
    return {
        restrict: 'E',
        templateUrl: './users/new/new-user.tpl.html',
        scope: {
            userList:'='
        },
        controller: NewUserCtrl,
        controllerAs: 'newUser',
        bindToController: true
    };

    function NewUserCtrl(Users) {
       this.save =  (user) => {
           Users.save(user);
           this.userList.push(user);
           this.user = {};
       }
    }
}