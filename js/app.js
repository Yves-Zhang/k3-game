var myApp=angular.module("myapp",["ionic","ui.router"]);//依赖注入“ionic”，“ui.router”
myApp.controller("topController",["$scope",function($scope){

    newTime();
    $scope.timeDown;

    //后台获取时间字符串 转时间戳
    function timeStamp(timeStr){
        // 获取某个时间格式的时间戳
        var timestamp2 = Date.parse(new Date(timeStr));
        timestamp2 = timestamp2 / 1000;
        return timestamp2;
    }
    //转时间戳函数结束

    //获取新期开奖时间函数
    function newTime(){
        var data={
            "apiCode":"200006",
            "params":{"gameId":"9","issueNum":"161205041"}
        };
        $.ajax({
            async: false,
            dataType:'json',
            url:"http://112.74.45.194:8080/api",
            type:'POST',
            data:JSON.stringify(data),
            beforeSend:function(xhr){
                xhr.setRequestHeader( "CONTENT-TYPE","application/json")
            },
            success: function (resp) {
                var endtime=timeStamp(resp.content.endSaleTime);//截止销售时间戳
                var nowtime=timeStamp(resp.content.serverTime)//服务器时间戳
                var drawtime=timeStamp(resp.content.drawTime)//开奖时间戳
                //计算当前时间距下期截止销售的时间函数
                function countDown()
                {
                    return parseInt(endtime)-parseInt(nowtime)//根据服务器时间与截止销售时间计算倒计时
                }
                //计算当前时间距下期截止销售的时间函数完

                //截取当前期号后两位
                $scope.indexIssue=resp.content.issue.slice(7,9);
                $scope.timeDown=countDown();
                $scope.run=parseInt(drawtime)-parseInt(nowtime);

                console.log(resp);
                console.log("下期开奖时间："+resp.content.drawTime);
                console.log("截止销售时间："+resp.content.endSaleTime);
                console.log("当前时间："+resp.content.serverTime);
            },
            error:function(resp){
                console.log(resp)
            }
        });
    }
    //获取新期开奖时间结束


    //定时器 开奖倒计时
    setInterval(function(){
        if($scope.run<=0&&$scope.timeDown==0){ //到了截止销售时间；且到了开奖时间
            newTime();
            clearInterval(annimatebegin);
            annimateopen=true;
            newRunalotterynumber();
            $scope.indexnum=$scope.resp[0].drawNumber.replace(/;/g," ");
            var awardnumber=[];  //获取当前期开奖号码 存入变量awardnumber
            for(var i=0;i<=$scope.resp[0].drawNumber.length;i++){
                awardnumber.push($scope.resp[0].drawNumber[i])
            }
            $scope.awardOne='img/k3img/k3_v'+awardnumber[0]+'.png';
            $scope.awardTwo='img/k3img/k3_v'+awardnumber[2]+'.png';
            $scope.awardThree='img/k3img/k3_v'+awardnumber[4]+'.png';

        }else if($scope.run>0&&$scope.timeDown<=0){ //到了截止销售时间；但没有到开奖时间
            if($scope.timeDown==0){
                donghua();
            }
            $scope.run--;
            $scope.timeDown=0
            $scope.showtime="正在开奖";
            console.log($scope.run)
        }else if($scope.run>0&&$scope.timeDown>0){ //没有到截止销售时间；也没有到开奖时间
            $scope.timeDown--;
            $scope.run--
            var hours=parseInt($scope.timeDown/60/60);
            var mins=parseInt($scope.timeDown/60);
            var sec=$scope.timeDown%60;
            if(mins<=9){
                mins="0"+mins;
            }
            if(sec<=9){
                sec="0"+sec;
            }
            if(hours==0){
                $scope.showtime=mins+":"+sec;
            }else{
                $scope.showtime=hours+":"+mins+":"+sec;
            }
        }else if($scope.timeDown==NaN){//如果没有取到后台数据 那么就一直取
            newTime();
        }
        $scope.$apply();
    },1000);
    //定时器 开奖倒计时 结束


    //获取最新一期开奖号码
    function newRunalotterynumber(){
        var data={
            "apiCode":"900006",
            "params":{
                "gameId":"9",
                "issue":"",
                "num":"1"
            }
        };
        $.ajax({
            async: true,
            dataType:'json',
            url:"http://112.74.45.194:8080/api",
            type:'POST',
            data:JSON.stringify(data),
            beforeSend:function(xhr){
                xhr.setRequestHeader( "CONTENT-TYPE","application/json")
            },
            success: function (resp) {
                $scope.resp=resp.content;
            },
            error:function(resp){
                console.log(resp)
            }
        });
    };
    newRunalotterynumber();
    console.log($scope.resp[0].drawNumber[0])
    console.log($scope.resp[0].drawNumber)
    $scope.indexnum=$scope.resp[0].drawNumber.replace(/;/g," ");
    var awardnumber=[];  //获取当前期开奖号码 存入变量awardnumber
    for(var i=0;i<=$scope.resp[0].drawNumber.length;i++){
        awardnumber.push($scope.resp[0].drawNumber[i])
    }
    console.log(awardnumber)
    $scope.awardOne='img/k3img/k3_v'+awardnumber[0]+'.png';
    $scope.awardTwo='img/k3img/k3_v'+awardnumber[2]+'.png';
    $scope.awardThree='img/k3img/k3_v'+awardnumber[4]+'.png';
    var annimateopen=true;//给动画设置开关防止重复调用
    var annimatebegin;



    function donghua(){
        var index=[1,2,3];
        if(annimateopen==true){
            annimateopen=false;
            annimatebegin=setInterval(animate,150)
        }
        function animate(){
            for(var i=0;i<3;i++){
                if(index[i]>=6){
                    index[i]=1
                }else{
                    index[i]+=1;
                }
                $scope.awardOne='img/animate/k3_award/k3_award_'+index[0]+'.png';
                $scope.awardTwo='img/animate/k3_award/k3_award_'+index[1]+'.png';
                $scope.awardThree='img/animate/k3_award/k3_award_'+index[2]+'.png';
                $scope.$apply($scope.awardOne);
            }
        }
    }




}]);