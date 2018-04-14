(function(){

    'use strict';

    angular.module('myApp')
    .factory('playerFactory', playerFactory);

    playerFactory.$inject = ['playerService'];

    function playerFactory(playerService){

        var factory = {};

        factory.getPlayers = getPlayers;


        function getPlayers(){
            return playerService.getPlayers();
        }

        return factory;
    }
})();
