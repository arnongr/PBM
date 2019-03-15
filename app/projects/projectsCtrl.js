app.controller("projectsCtrl", function ($scope, $log, $location, projectsSrv, projectViewSrv) {

  // Getting all Projects from DB:
  $scope.projects = [];
  projectsSrv.getProjects().then(function (projects) {
    $scope.projects = projects;
  }, function (err) {
    $log.error(err);
  })

  // Creating new project (this works good):
  $scope.createProject = function () {
    projectsSrv.createProject($scope.projectName).then(function () {
      location.reload();
    }, function (err) {
      $log.error(err);
    })
  };

  // Creating new project on blur (not working):
  // $scope.projectName = {projectName};
  // $scope.cancle = function (e) {
  //   if (e.keyCode === 27) {
  //     $scope.createProject.projectName.$rollbackViewValue();
  //     projectsSrv.createProject($scope.projectName).then(function () {
  //       location.reload();
  //     }, function (err) {
  //       $log.error(err);
  //     })
  //   }
  // };

  // var projectName = "New Project";

  // $scope.newProject = function () {
  //   projectsSrv.newProject(projectName).then(function () {  // ORIGINAL: projectsSrv.newProject($scope.projectName).then(function() {
  //   }, function (err) {
  //     $log.error(err);
  //   })
  // };



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


