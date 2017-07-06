/**
 * Created by zhyf on 2017/3/22.
 */
myApp.controller("nav",["$scope","$state","$location","$rootScope",function($scope,$state,$location,$rootScope){
    $scope.on=["On","",""];
    $scope.nav="1";
    $scope.go=function(url){
        $state.go(url);
    }
    //监听url变化
    listenUrl();

    function listenUrl(){
        $rootScope.$on('$locationChangeSuccess',function(){
            var url=["/","//runAlottery","//noLogin"]
            $scope.nav="";
            $scope.on=["","",""];
            for(var i=0;i<url.length;i++){
                if($location.url()==url[i]){
                    $scope.nav=i+1;
                    $scope.on[i]="On";
                }
            }
        });
    }
    //监听url变化完
}]);