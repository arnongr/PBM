app.controller("projectsCtrl", function ($scope, $log, $location, projectsSrv, projectViewSrv) {

  // Getting all Projects from DB:
  $scope.projects = [];
  projectsSrv.getProjects().then(function (projects) {
    $scope.projects = projects;
  }, function (err) {
    $log.error(err);
  })

  // Adding new project to DB:

  // $scope.projectName;
  var projectName = "New Project";

  $scope.newProject = function () {
    // call service newProject
    projectsSrv.newProject(projectName).then(function () {  // ORIGINAL: projectsSrv.newProject($scope.projectName).then(function() {
    }, function (err) {
      $log.error(err);
    })
  };



  //Loading selected project:
  $scope.openProject = function (project) {
    $scope.items = [];
    projectViewSrv.items = [];
    projectViewSrv.getItems().then(function (items) {
      $scope.items = items;
    }, function (err) {
      $log.error(err);
    })

    for (var i = 0; i < $scope.items.length; i++) {
      if (items[i][key] === project.projectId) {
        push.items[i];
      }
      $location.path("projectView/" + $scope.items[i]);
    }

  }





})


