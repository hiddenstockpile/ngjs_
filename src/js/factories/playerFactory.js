angular.module('myApp')
.factory('playerFactory', [
    'playerService',
    function(playerService){

        var factory = {};
           
        factory.getPlayers = function(){

            return playerService.getPlayers();
        }

        return factory;
    }
]);