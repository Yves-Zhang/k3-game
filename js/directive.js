//myApp.directive("myinput",function(){
//    return {
//        restrict: 'E',
//        templateUrl: 'directive/input.html',
//        replace: true,
//        transclude: true,
//        scope:true,
//        link:function(scope,ele,atr){
//            scope.plh=atr.placeholder;
//            scope.lab=atr.label;
//            scope.labname=atr.labname;
//            scope.typ=atr.type;
//        }
//    }
//})

myApp.directive("mybutton",function(){
    return {
        restrict: 'E',
        templateUrl: 'directive/button.html',
        replace: true,
        transclude: true,
        scope:{},
        link:function(scope,ele,atr){
           scope.text=atr.text
            scope.button={
                "background-color":atr.bgColor,
                "color":atr.color,
                "margin":"0 auto",
                "margin-top":atr.top
            }
        }
    }
})
