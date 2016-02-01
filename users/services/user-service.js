angular.module('users').service('Users', Users);

function Users(Restangular) {
    return {
        getAll: getAllUsers,
        get: getUser,
        save: saveUser,
        update: updateUser
    };

    function getAllUsers() {
        return Restangular.allUrl('users',"http://jsonplaceholder.typicode.com/users").getList();
    }

    function getUser(id) {
    }

    function saveUser(User) {
        console.log(User);
    }

    function updateUser(id) {
    }

}