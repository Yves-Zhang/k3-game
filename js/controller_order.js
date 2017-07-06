/**
 * Created by Administrator on 2017/3/12.
 */
myApp.controller("order",["$scope","$state","$stateParams","myService",function($scope,$state,$stateParams,myService){
    $scope.go=function(url){
        $state.go(url)
    };
    beishu();

    var name=myService.gamemsg.gamename;//获取游戏的玩法
    $scope.showOrdernumber=myService.gamemsg.gamenumber;//获取玩家选中的号码

    //通过玩法判断机选一注
    $scope.jixuan=function(){
        if(name=="k3zhixuan"){
            myService.k3zhixuan();//调用myService方法 生成机选一注号码
        }
        beishu();
    };

    //清空玩家已选号码
    $scope.qingkong=function(){
        myService.gamemsg.gamenumber=[];
        $scope.showOrdernumber=myService.gamemsg.gamenumber;//获取玩家选中的号码
        beishu();
    };

    //通过玩法判断上级界面
    $scope.zixuan=function(){
        if(name=="k3zhixuan"){
            $state.go("gamepage")
        }
    };

    //删除指定号码
    $scope.del=function($index){
        myService.gamemsg.gamenumber.splice($index,1);//删除当前元素
        $scope.showOrdernumber=myService.gamemsg.gamenumber;//获取玩家选中的号码
        beishu();
    };

    //倍数和今天计算函数
    function beishu(){
        $scope.zhushu=myService.gamemsg.gamenumber.length;
        $scope.jine=$scope.zhushu*2;
    }









}]);
