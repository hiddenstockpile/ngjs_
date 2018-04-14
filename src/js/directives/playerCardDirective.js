(function(){

    'use strict';

    angular.module('myApp')
    .directive('playerCard', function(){

        return {
            restrict : 'E',
            scope : {
                player : '=player'
            },
            templateUrl : 'directives/playerCard.html',
            controller : playerCardController
        }


        playerCardController.$inject = ['$scope'];

        function playerCardController($scope){

        }
    });
    
})();