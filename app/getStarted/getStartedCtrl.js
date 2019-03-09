
app.controller("getStartedCtrl", function($scope, $location, $log) {

    //Redirect to 'Get Started' page
    $scope.getStarted = function () {
        $location.path("/getStarted");
        $log.error(err);
      }

})