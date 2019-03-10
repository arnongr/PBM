
app.controller("loginCtrl", function ($scope, $location, $log, userSrv) {


    //Login
    $scope.invalidLogin = false;
    $scope.email = "arnon.work@gmail.com";
    $scope.pwd = "123";



    $scope.login = function () {

        userSrv.login($scope.email, $scope.pwd).then(function (activeUser) {
            $location.path("/login");
        }, function () {
            $scope.invalidLogin = true;
        });

    }

})