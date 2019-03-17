app.controller("projectsCtrl", function ($scope, $log, $location, projectsSrv, projectViewSrv) {

  // Getting all Projects from DB:
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
    $("#deleteModal").modal("show");
  }

  //Deleting project:
  $scope.deleteProject = function (project) {
    projectsSrv.deleteProject(parseProject).then(function () {
      // remove line
      // var index = $scope.projects.indexOf(project);
      // $scope.array.splice(index, 1);

    }, function (err) {
      $log.error(err);
    })
  }


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


