app.controller("projectsCtrl", function ($scope, $log, $location, $routeParams, projectsSrv, projectDetailsSrv) {

  // location.reload();

  // Getting Projects from DB:
  $scope.projects = [];
  projectsSrv.getActiveUserProjects().then(function (projects) {
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

  //####### ITEMS ########
  // Getting all Projects from DB (is also in projectsCtrl.js):
  // $scope.projects = [];
  // projectsSrv.getProjects().then(function (projects) {
  //   $scope.projects = projects;
  // }, function (err) {
  //   $log.error(err);
  // })

  //Loading project by id (also in projectsCtrl):
  // projectsSrv.getProjectById($routeParams.projectIndex).then(function (project) {
  //   $scope.project = project;
  // })
  // Loading selected project (also in projectsCtrl):
  // $scope.openProject = function (project) {
  //   $location.path("projectDetails/" + $scope.projects.indexOf(project));
  //   $scope.project;
  // }


  // Loading Items:
  $scope.items = [];
  projectDetailsSrv.getItems().then(function (items) {

    $scope.items = items;
    console.log(items.itemName);
    // $log.log(items.length);

    var itemExpenseTotal = items.reduce(function (prev, cur) {
      return prev + cur.itemExpense;
    }, 0);
    // console.log('Total Expense:', itemExpenseTotal);
    $scope.itemExpenseTotal = itemExpenseTotal;

  }, function (err) {
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

  // Updating itemName:  
  $scope.updateItemName = function (item, itemNameNew) {
    projectDetailsSrv.updateItemName(item, itemNameNew);
  }
  // Updating itemOwner:  
  $scope.updateItemOwner = function (item, itemOwnerNew) {
    projectDetailsSrv.updateItemOwner(item, itemOwnerNew);
  }
  // Updating itemCategory:
  $scope.updateItemCategory = function (item, itemCategoryNew) {
    projectDetailsSrv.updateItemCategory(item, itemCategoryNew);
  }
  // Updating itemExpense:
  $scope.updateItemExpense = function (item, itemExpenseNew) {
    $scope.item = item;
    projectDetailsSrv.updateItemExpense(item, itemExpenseNew);
    location.reload();
  }


  //Deleting item:
  $scope.deleteItem = function (item) {
    projectDetailsSrv.deleteItem(item).then(function () {
      //Removing row from DOM:
      //   var index = -1;
      //   var comArr = eval($scope.items);
      //   for (var i = 0; i < comArr.length; i++) {
      //     if (comArr[i].name === name) {
      //       index = i;
      //       break;
      //     }
      //   }
      //   $scope.items.splice(index, 1);
      // }, function (err) {
      //   $log.error(err);
      // })
      location.reload();
    })
  }

  // Modal for deleting item:
  $scope.deleteItemModal = function (item) {
    $scope.selectedItem = item.itemName;
    $scope.item = item;
    $("#deleteModalItem").modal("show");
  }


  // Updating projectName:
  $scope.projectName;
  $scope.updateProjectName = function () {
    // call service projectsSrv
    projectsSrv.updateProjectName($scope.projectName).then(function () {
    }, function (err) {
      $log.error(err);
    })
  };


  //Updating projectBudget:
  $scope.updateProjectBudget = function (project, projectBudgetNew) {
    projectsSrv.updateProjectBudget(project, projectBudgetNew);
  }



  //Pie chart for Items:

  // $scope.options = {
  //   legend: {
  //     display: true
  //   }
  // }
  // for (var i = 0; i < $scope.items.length; i++) {
  //   if ($scope.cars[i].year >= 2012) {
  //     ++newCars;
  //   } else {
  //     ++oldCars;
  //   }
  // }

  // return [newCars, oldCars];
  // }  
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];
  // $scope.labels = {itemName[]}

});