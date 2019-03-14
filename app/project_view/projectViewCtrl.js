
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

  // Editing projectName:
  $scope.projectName;
  $scope.editProjectName = function() {
        // call service projectsSrv
        projectsSrv.editProjectName($scope.projectName).then(function() {
        }, function(err) {
            $log.error(err);
        })
      };


  //Adding budget
  $scope.projectBudget;

  $scope.editProjectBudget = function() {
    // call service projectBudget
    projectsSrv.editProjectBudget($scope.projectBudget).then(function() {
    }, function(err) {
        $log.error(err);
    })
  };


})

