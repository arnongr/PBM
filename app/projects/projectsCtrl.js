app.controller("projectsCtrl", function ($scope, $log, $location, projectsSrv) {

  // Loading the projects
  $scope.projects = [];
  projectsSrv.getProjects().then(function(projects) {
    $scope.projects = projects;
  }, function(err) {
    $log.error(err);
  })
})
