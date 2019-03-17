
app.controller("projectDetailsCtrl", function ($scope, $location, $log, projectDetailsSrv, projectsSrv) {

  // Getting all Projects from DB (is also in projectsCtrl.js):
  $scope.projects = [];
  projectsSrv.getProjects().then(function (projects) {
    $scope.projects = projects;
  }, function (err) {
    $log.error(err);
  })

  // Loading the items
  $scope.items = [];
  projectDetailsSrv.getItems().then(function(items) {
    $scope.items = items;
  }, function(err) {
    $log.error(err);
  })

  // Creating new item:
  $scope.createItem = function () {
    projectDetailsSrv.createItem($scope.itemName).then(function (newItem) {
      $scope.items.push(newItem);
    }, function (err) {
      $log.error(err);
    })
    $scope.itemName = "";
  };


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

