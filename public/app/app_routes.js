'use strict';

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', function ($state) {
        $state.go('access');
    });
    $stateProvider
        .state('access', {
            url: '/access',
            templateUrl: 'app/components/access/accessTpl.html',
            controller: 'AccessCtrl'
        })
});