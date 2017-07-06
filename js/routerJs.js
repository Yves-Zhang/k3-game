/**
 * Created by zhyf on 2017/3/10.
 */
myApp.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("default",{
            url:"/",
            views:{
                "home":{
                    templateUrl:"views/nav.html",
                    controller:"nav"
                },
                "main@default":{
                    templateUrl:"views/hall.html",
                    controller:"hall"
                }
            }
        })
        .state("default.main",{
            url:"/main",
            views:{
                "main":{
                    templateUrl:"views/hall.html",
                    controller:"hall"
                }
            }
        })
        .state("default.runAlottery",{
            url:"/runAlottery",
            views:{
                "main":{
                    templateUrl:"views/runAlottery.html",
                    controller:"runAlottery"
                }
            }
        })
        .state("default.user",{
            url:"/user",
            views:{
                "main":{
                    templateUrl:"views/user.html",
                    controller:"user"
                }
            }
        })
        .state("default.onLogin",{
            url:"/noLogin",
            views:{
                "main":{
                    templateUrl:"views/noLogin.html",
                    controller:"nologin"
                }
            }
        })
        .state("gamepage",{
            url:"/gamepage",
            views:{
                "home":{
                    templateUrl:"views/gamePage.html",
                    controller:"gamekuaisan"
                }
            }
        })
        .state("order",{
            url:"/order",
            views:{
                "home":{
                    templateUrl:"views/order.html",
                    controller:"order"
                }
            }
        })
        .state("regist",{
            url:"/regist",
            views:{
                "home":{
                    templateUrl:"views/regist.html",
                    controller:"regist"
                }
            }
        })
        .state("login",{
            url:"/login",
            views:{
                "home":{
                    templateUrl:"views/login.html",
                    controller:"login"
                }
            }
        })
}]);