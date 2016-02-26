'use strict';

var cards = angular.module('cardsApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'textAngular',
    'angular-loading-bar',
    'ngStorage',
]);

cards.config(['$routeProvider', function($routeProvider){

    $routeProvider
        // INITIAL ROUTES
        .when('/', {
            redirectTo: '/main'
        })

        .when('/404', {
            templateUrl: 'views/404.html',
        })

        .otherwise({
            redirectTo: '/404'
        })

        // CONTENT ROUTES
        .when('/patients',{
            templateUrl: 'views/patients.html',
            controller: 'patientController',
            resolve: {
                checkLoggedIn: function($location, AuthService) {
                    if (!AuthService.isLoggedIn()) {
                        $location.path('/login');
                    }
                }
            }
        })

        .when('/clinicHistories',{
            templateUrl: 'views/clinicHistories.html',
            controller: 'clinicHistoryController',
            resolve: {
                checkLoggedIn: function($location, AuthService) {
                    if (!AuthService.isLoggedIn()) {
                        $location.path('/login');
                    }
                }
            }
        })

        // AUTH ROUTES
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'mainController',
            controllerAs: 'login',
        })

        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'mainController',
            controllerAs: 'register',
        })

}]);

// application configuration to integrate token into requests
cards.config(function($httpProvider) {

    // atach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor');
});

cards.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});
