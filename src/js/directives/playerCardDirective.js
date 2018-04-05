angular.module('myApp')
.directive('playerCard', function(){

    return {
        restrict : 'E',
        scope : {
            player : '=player'
        },
        templateUrl : 'directives/playerCard.html',
        controller : function($scope) {
                        
        }
    }
});