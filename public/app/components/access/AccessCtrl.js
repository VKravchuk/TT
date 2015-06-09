'use strict';

app.controller('AccessCtrl', function ($scope, $http) {
    $scope.login = function () {
        $http.post('http://localhost:8080/api/auth', {
            username: $scope.username,
            password: $scope.password
        }).then(function (resp) {
            console.log(resp);
        });
    }
});