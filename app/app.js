var app = angular.module("PBM", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "app/landing/landing.html",
        controller: "getStartedCtrl",
    }).when("/getStarted", {
        templateUrl: "app/getStarted/get-started.html",
    }).when("/login", {
        templateUrl: "app/login/login.html"
    }).when("/workSpace", {
        templateUrl: "app/work-space/work-space.html"


    }).otherwise({
        redirectTo: "/"
    });

})
