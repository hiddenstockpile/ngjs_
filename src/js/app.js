(function(){

    'use strict';

    angular.module('myApp', [
        'ngRoute'
    ])
    .config(appConfig);

    appConfig.$inject = ['$routeProvider'];

    function appConfig($routeProvider){
        $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller : 'HomeController'
        })
    }
    
})();
