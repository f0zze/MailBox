angular.module('users').service('Users', Users);

function Users() {
    return {
        getAll: getAllUsers,
        get: getUser,
        save: saveUser,
        update: updateUser
    };

    function getAllUsers() {
        return [{"name": 'Aigars'},{"name": 'John'}];
    }

    function getUser(id) {
    }

    function saveUser(User) {
    }

    function updateUser(id) {
    }

}