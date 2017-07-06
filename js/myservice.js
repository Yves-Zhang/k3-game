//机选服务
myApp.service("myService",function(){
    this.gamemsg={
        gamename:"",
        gamenumber:[]
    };
    this.getrandom=function(max,min){
        return Math.ceil(Math.random()*(max-min+1)+min-1);
    };
    this.k3zhixuan=function(){
        var number=[];
        for(var i=0;i<3;i++){
            number.push(this.getrandom(6,1))
        }
        this.gamemsg.gamenumber.push(number);
    }
});


//ajax服务
myApp.service('myAjax',function(){
    //ajax封装
    this.send=function(url,sendjson,sucfunc,errfunc){
        $.ajax({
            dataType:'json',
            url:url,
            type:'POST',
            data:JSON.stringify(sendjson),
            beforeSend:function(xhr){
                xhr.setRequestHeader( "CONTENT-TYPE","application/json")
            },
            success:sucfunc,
            error:errfunc
        })
    };
    //ajax封装完

    //本地存取服务
    this.keepLocalmsg=function(key,value){
        localforage.setItem(key,value).then(function(value) {
            console.log(value);
        }).catch(function(err) {
            console.log(err);
        });
    };
    this.getLocalmsg=function(key){
        localforage.getItem(key).then(function(value) {
            console.log(value);
        }).catch(function(err) {
            console.log(err);
        });
    };
    //本地存取完
});