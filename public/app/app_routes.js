'use strict';

app.config(function ($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/homepageTpl.html',
            controller: 'MainCtrl'
        })
});