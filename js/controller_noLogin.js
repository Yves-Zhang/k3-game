myApp.controller('nologin',["$scope","$state",function($scope,$state){
    $scope.go=function(url){
        $state.go(url)
    }
}])
