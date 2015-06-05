'use strict';

app.controller('AccessCtrl', function ($scope, $http) {
    $scope.signup = function () {
        $http.post('http://localhost:8080/api/users', {
            username: $scope.username,
            password: $scope.password
        }).then(function (resp) {
            console.log(resp);
        });
    }
});