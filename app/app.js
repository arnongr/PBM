var app = angular.module("PBM", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "app/landing/landing.html",
        controller: "getStartedCtrl",
    }).when("/getStarted", {
        templateUrl: "app/getStarted/get-started.html",
        controller: "createUserCtrl"
    }).when("/login", {
        templateUrl: "app/login/login.html",
        controller: "loginCtrl"
    // }).when("/workSpace", {
    //     templateUrl: "app/workspace/workspace.html"
    }).when("/projects", {
        templateUrl: "app/projects/projects.html",
        controller: "projectsCtrl"
    }).when("/projectDetails", {
        templateUrl: "app/project_details/project-details.html",
        controller: "projectDetailsCtrl"


    }).otherwise({
        redirectTo: "/"
    });

})
