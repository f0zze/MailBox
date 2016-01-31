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
        var vm = this;

        vm.users = Users.getAll();
    }
}