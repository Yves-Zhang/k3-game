/**
 * Created by zhyf on 2017/3/22.
 */
myApp.controller("user",["$scope","$state",'myAjax',function($scope,$state,myAjax){
    $scope.user= myAjax.getLocalmsg("user");
    if($scope.user==undefined||$scope.user==null){
        $state.go("default.onLogin")
    }
}])
