'use strict';

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.when('/', function ($state) {
        $state.go('access.login');
    });
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('access', {
            url: '/access',
            abstract: true,
            template: '<div ui-view></div>',
            controller: 'MainCtrl'
        })
        .state('access.login', {
            url: '/login',
            templateUrl: 'app/components/access/login/loginTpl.html',
            controller: 'LoginCtrl'
        })
});