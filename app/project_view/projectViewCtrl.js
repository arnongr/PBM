
app.controller("projectViewCtrl", function ($scope, $location, $log, projectViewSrv, projectsSrv) {

  // Loading the items
  $scope.items = [];
  projectViewSrv.getItems().then(function(items) {
    $scope.items = items;
  }, function(err) {
    $log.error(err);
  })

  // $scope.item = { itemName: 'Description', data: 'Data' };

  // $scope.cancel = function(e) {
  //   if (e.keyCode === 27) {
  //     $scope.newLine.itemName.$rollbackViewValue();
  //   }
  // };

  // Updating projectName:
  // $scope.projectName = "test";

  // $scope.cancel = function(e) {
  //   if (e.keyCode === 27) {
  //     $scope.userForm.projectName.$rollbackViewValue();
  //   }
  // };


  // Updating projectName:
  $scope.projectName;
  $scope.updateProjectName = function() {
        // call service projectsSrv
        projectsSrv.updateProjectName($scope.projectName).then(function() {
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

