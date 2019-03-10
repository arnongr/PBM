
app.controller("createUserCtrl", function ($scope, $location, $log) {

 
    //New user:
    $scope.signUp = function() {
        // call service createUser
        userSrv.signUp($scope.email, $scope.pwd).then(function() {
            $location.path("/workSpace");
        }, function(err) {
            $log.error(err);
        })
    };



})