(function(){

    'use strict';

    angular.module('myApp')
    .service('playerService', playerService);

    playerService.$inject = ['$http'];

    function playerService($http){

        var service = {};

        service.getPlayers = getPlayers;

        function getPlayers(param) {

            return $http({
                method : "GET",
                url : 'fixtures/players.json'
            });
        }

        return service;
    }    
})();
