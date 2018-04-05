angular.module('myApp')
.service('playerService',[
    '$http',
    function($http){

        var service = {};

        service.getPlayers = function(param) {

            return $http({
                method : "GET",
                url : 'fixtures/players.json'
            });
        }

        return service;
    }
]);