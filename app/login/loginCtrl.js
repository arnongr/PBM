
app.controller("loginCtrl", function ($scope, $location, $log, userSrv) {

    $scope.logIn = function() {

        userSrv.logIn($scope.email, $scope.password).then(function(activeUser) {
            $location.path("/projects");

        })}


})