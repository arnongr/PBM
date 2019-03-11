
app.controller("projectViewCtrl", function ($scope, $location, $log, projectViewSrv) {

  // Loading the items
  $scope.items = [];
  projectViewSrv.getItems().then(function(items) {
    $scope.items = items;
  }, function(err) {
    $log.error(err);
  })
})

