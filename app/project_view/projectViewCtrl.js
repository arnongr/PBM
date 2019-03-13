
app.controller("projectViewCtrl", function ($scope, $location, $log, projectViewSrv, projectsSrv) {

  // Loading the items
  $scope.items = [];
  projectViewSrv.getItems().then(function(items) {
    $scope.items = items;
  }, function(err) {
    $log.error(err);
  })

  $scope.item = { itemName: 'Description', data: 'Data' };

  $scope.cancel = function(e) {
    if (e.keyCode === 27) {
      $scope.newLine.itemName.$rollbackViewValue();
    }
  };

  // Adding new Project
  $scope.projectName;

  $scope.newProject = function() {
    // call service newProject
    projectsSrv.newProject($scope.projectName).then(function() {
    }, function(err) {
        $log.error(err);
    })
};
})

