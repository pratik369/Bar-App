'use strict';

angular
    .module('barApp', [
        'ngResource',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/summary', {
                templateUrl: 'views/summary.html',
                controller: 'SummaryCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
