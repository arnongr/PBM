
app.controller("projectDetailsCtrl", function ($scope, $routeParams, $location, $log, projectDetailsSrv, projectsSrv) {

  // Getting all Projects from DB (is also in projectsCtrl.js):
  $scope.projects = [];
  projectsSrv.getProjects().then(function (projects) {
    $scope.projects = projects;
  }, function (err) {
    $log.error(err);
  })

  //Loading project by id (also in projectsCtrl):
  projectsSrv.getProjectById($routeParams.projectIndex).then(function (project) {
    $scope.project = project;
  })
  // Loading selected project (also in projectsCtrl):
  $scope.openProject = function (project) {
    $location.path("projectDetails/" + $scope.projects.indexOf(project));
    $scope.project;
  }


  // Loading Items:
  $scope.items = [];
  projectDetailsSrv.getItems().then(function (items) {
    $scope.items = items;
    $log.log(items.length);
    // $log.log(itemId);

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
      projectDetailsSrv.updateItemExpense(item, itemExpenseNew);
    }


  //Deleting item:
  $scope.deleteItem = function (item) {
    projectDetailsSrv.deleteItem(item).then(function () {
      //Removing row from DOM:
      var index = -1;
      var comArr = eval($scope.items);
      for (var i = 0; i < comArr.length; i++) {
        if (comArr[i].name === name) {
          index = i;
          break;
        }
      }
      $scope.items.splice(index, 1);
    }, function (err) {
      $log.error(err);
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


  //Adding budget
  $scope.projectBudget;

  $scope.editProjectBudget = function () {
    // call service projectBudget
    projectsSrv.editProjectBudget($scope.projectBudget).then(function () {
    }, function (err) {
      $log.error(err);
    })
  };


})

