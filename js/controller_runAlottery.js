/**
 * Created by zhyf on 2017/3/24.
 */
myApp.controller("runAlottery",["$scope","$state","myAjax",function($scope,$state,myAjax){
    var data={
        "apiCode":"900006",
        "params":{
            "gameId":"9",
            "issue":"",
            "num":"10"
        }
    };
    $.ajax({
        dataType:'json',
        url:"http://112.74.45.194:8080/api",
        type:'POST',
        data:JSON.stringify(data),
        beforeSend:function(xhr){
            xhr.setRequestHeader( "CONTENT-TYPE","application/json")
        },
        success: function (resp) {
            $scope.indexRunalottery=resp.content[0];
            $scope.sumNumber=function(){
                var a=parseInt($scope.indexRunalottery.drawNumber[0])
                var b=parseInt($scope.indexRunalottery.drawNumber[2])
                var c=parseInt($scope.indexRunalottery.drawNumber[4])
                return a+b+c;
            }
            $scope.$apply($scope.indexRunalottery)
            $scope.$apply($scope.sumNumber)
            console.log(resp)
        },
        error:function(resp){
            console.log(resp)
        }
    });
}]);