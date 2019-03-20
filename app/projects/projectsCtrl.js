app.controller("projectsCtrl", function ($scope, $log, $location, $routeParams, projectsSrv) {

  // Getting all Projects from DB (is also in projectDetailsCtrl.js):
  $scope.projects = [];
  projectsSrv.getProjects().then(function (projects) {
    $scope.projects = projects;
  }, function (err) {
    $log.error(err);
  })

  // Creating new project:
  $scope.createProject = function () {
    projectsSrv.createProject($scope.projectName).then(function (newProject) {
      $scope.projects.push(newProject);
    }, function (err) {
      $log.error(err);
    })
  };

  // Creating new project with modal:
  $scope.createProjectModal = function () {
    $("#createProjectModal").modal("show");
  }

  // Clearing modal after closing:
  $scope.resetForm = function () {
    $scope.projectName = "";
  }

  // Modal for deleting project:
  $scope.deleteProjectModal = function (project) {
    $scope.selectedProject = project.projectName;
    $scope.project = project;
    $("#deleteModal").modal("show");
  }

  //Deleting project:
  $scope.deleteProject = function (project) {
    projectsSrv.deleteProject(project).then(function () {
      //Removing row from DOM:
      var index = -1;
      var comArr = eval($scope.projects);
      for (var i = 0; i < comArr.length; i++) {
        if (comArr[i].name === name) {
          index = i;
          break;
        }
      }
      $scope.projects.splice(index, 1);
    }, function (err) {
      $log.error(err);
    })
  }

  //Loading project by id (also in projectDetailsCtrl):
  projectsSrv.getProjectById($routeParams.projectIndex).then(function (project) {
    $scope.project = project;
  })
  // Loading selected project (also in projectDetailsCtrl):
  $scope.openProject = function (project) {
    $location.path("projectDetails/" + $scope.projects.indexOf(project));
    $scope.project;
  }
});