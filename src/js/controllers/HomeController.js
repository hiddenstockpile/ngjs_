angular.module('myApp')
.controller('HomeController', [
    '$scope',
    'playerFactory',
    function($scope, playerFactory){

        $scope.message = "Fantasy NBA";
        $scope.roster;

        playerFactory.getPlayers().then(function(roster){
            $scope.roster = roster.data;
        });

        $scope.addPlayer = function(){
            $scope.roster.push(
                {
                    name : $scope.newPlayer.name,
                    team : $scope.newPlayer.team
                }
            );  
        };
    }
]);