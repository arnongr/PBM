var app = angular.module("PBM", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "app/landing/landing.html"
    }).when("/getStarted", {
        templateUrl: "app/getStarted/get-started.html",
        controller: "getStartedCtrl"
    // })
    // .when("/movies", {
    //     templateUrl: "Movies Gallery/movieCard.html",
    //     controller: "movieCtrl"
    // }).when("/movies/:movieId", {
    //     templateUrl: "Movie Details/movieDetails.html",
    //     controller: "movieDetailsCtrl"

    }).otherwise({
        redirectTo: "/"
    });

})

