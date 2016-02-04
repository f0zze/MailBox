angular.module('users').directive('userList', UserList);

function UserList() {
    return {
        restrict: 'E',
        templateUrl: './users/list/user-list.tpl.html',
        scope: {},
        controller: UserList,
        controllerAs: 'userList'
    };

    function UserList(Users) {
        this.users = null;

        this.makeEditable = (user) => {
            console.dir(user);
        };

        Users.getList().then((data)=> {
            this.users = data;
        });
    }
}