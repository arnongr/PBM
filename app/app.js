var app = angular.module("PBM", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "app/landing.html"
    })
    // .when("/actors", {
    //     templateUrl: "Actors Gallery/actors.html",
    //     controller: "actorsCtrl"
    // }).when("/movies", {
    //     templateUrl: "Movies Gallery/movieCard.html",
    //     controller: "movieCtrl"
    // }).when("/movies/:movieId", {
    //     templateUrl: "Movie Details/movieDetails.html",
    //     controller: "movieDetailsCtrl"

    // }).otherwise({
    //     redirectTo: "/"
    // });

})

