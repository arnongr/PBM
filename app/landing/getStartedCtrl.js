
app.controller("getStartedCtrl", function ($scope, $location, $log, userSrv) {

    //Redirect to 'Get Started' page
    $scope.getStarted = function () {
        $location.path("/getStarted");
    }

    //Redirect to 'Work Space' page


    //Redirect to 'Login' page
    $scope.login = function () {
        $location.path("/login");
    }


    //Login
    $scope.invalidLogin = false;
    $scope.email = "arnon.work@gmail.com";
    $scope.pwd = "123";



    // $scope.login = function () {

    //     userSrv.login($scope.email, $scope.pwd).then(function (activeUser) {
    //         $location.path("/login");
    //     }, function () {
    //         $scope.invalidLogin = true;
    //     });

    // }

})