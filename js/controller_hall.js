/**
 * Created by zhyf on 2017/3/10.
 */
myApp.controller("hall",["$scope","$state",function($scope,$state){
    $scope.go=function(url){
        $state.go(url);
    }
}]);
