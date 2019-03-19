app.controller("projectsCtrl", function ($scope, $log, $location, projectsSrv, projectDetailsSrv) {

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
      // reloading page:
      location.reload();
    }, function (err) {
      $log.error(err);
    })
  }


  //Loading selected project:
  $scope.openProject = function (project) {
    $location.path("projectDetails/");

  }



})


