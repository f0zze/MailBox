angular.module('users').service('Users', Users);

function Users(Restangular) {
    return Restangular.allUrl('users', "https://mail-box-api-staparix.c9users.io/users");
}