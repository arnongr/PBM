var app = angular.module("PBM", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "app/landing/landing.html",
        controller: "getStartedCtrl"
    }).when("/getStarted", {
        templateUrl: "app/getStarted/get-started.html",
    }).when("/workSpace", {
        templateUrl: "app/work-space/work-space.html"
    //     controller: "movieCtrl"
    // }).when("/movies/:movieId", {
    //     templateUrl: "Movie Details/movieDetails.html",
    //     controller: "movieDetailsCtrl"

    }).otherwise({
        redirectTo: "/"
    });

})
