/**
 * Created by zhyf on 2017/3/10.
 */
myApp.controller("gamekuaisan",["$scope","$state","myService",function($scope,$state,myService){
    numberinit();
    $scope.gamename="快3";
    $scope.gohome=function(){
        $state.go("default");
    };
    $scope.single=
            [
                {
                    title:"第一组号码",
                    number:[1,2,3,4,5,6,'*']
                },
                {
                    title:"第二组号码",
                    number:[1,2,3,4,5,6,'*']
                },
                {
                    title:"第三组号码",
                    number:[1,2,3,4,5,6,'*']
                }
            ];
    $scope.sentnumber=[];

    //初始化号码状态
    function numberinit(){
        $scope.instyleone='';
        $scope.instyletwo='';
        $scope.instylethree='';
    }
    $scope.numberChioce=function($index,k){
        switch (k){
            case 0:
                if($scope.instyleone==$scope.single[k].number[$index]){
                    $scope.instyleone='';
                }else if($scope.instyleone!=$scope.single[k].number[$index]){
                    $scope.instyleone=$scope.single[k].number[$index];
                }
                break;
            case 1:
                if($scope.instyletwo==$scope.single[k].number[$index]){
                    $scope.instyletwo='';
                }else if($scope.instyletwo!=$scope.single[k].number[$index]){
                    $scope.instyletwo=$scope.single[k].number[$index];
                }
                break;
            case 2:
                if($scope.instylethree==$scope.single[k].number[$index]){
                    $scope.instylethree='';
                }else if($scope.instylethree!=$scope.single[k].number[$index]){
                    $scope.instylethree=$scope.single[k].number[$index];
                }
                break;
        }
    };
    function getrandom(max,min){
        return Math.ceil(Math.random()*(max-min+1)+min-1);
    }



    var index=[1,2,3];
    $scope.randomnumber=function(){
        numberinit();//初始化号码状态
        for(var i=0;i<3;i++){
            var index=getrandom(6,1);
            $scope.numberChioce(index-1,i);
        }
    };

    $scope.clearnumber=function(){
        numberinit();
    };

    $scope.toorder=function(){
        if($scope.instyleone!=''&&$scope.instyletwo!=''&&$scope.instylethree!=''){
            var arr=[];
            arr.push($scope.instyleone);
            arr.push($scope.instyletwo);
            arr.push($scope.instylethree);
            myService.gamemsg.gamename="k3zhixuan";
            myService.gamemsg.gamenumber.push(arr);
            $state.go("order");
                }else{
                    alert("请按照游戏规则选择号码");
                }
    };










//摇骰子动画
    //function randomanimate(){
    //    for(var i=0;i<3;i++){
    //        if(index[i]>=4){
    //            index[i]=1
    //        }else{
    //            index[i]+=1;
    //        }
    //        $scope.randomimgOne='img/animate/dice/dice_f'+index[0]+'.png';
    //        $scope.randomimgTwo='img/animate/dice/dice_f'+index[1]+'.png';
    //        $scope.randomimgThree='img/animate/dice/dice_f'+index[2]+'.png';
    //        $scope.$apply($scope.randomimgOne);
    //    }
    //}








}]);

