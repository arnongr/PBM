
app.controller("getStartedCtrl", function ($scope, $location, $log, userSrv) {

    //Redirect to 'Get Started' page
    $scope.getStarted = function () {
        $location.path("/getStarted");
    }

    //Redirect to 'Work Space' page


    //Redirect to 'Login' page
    $scope.redirectToLogin = function () {
        $location.path("/login");
    }


    //Login
    $scope.invalidLogin = false;
    $scope.email = "arnon.work@gmail.com";
    $scope.pwd = "123";





})