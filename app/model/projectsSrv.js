app.factory("projectsSrv", function ($http, $q, $log) {

  var projects = [];

  // Project constructor
  function Project(parseProject) {
    this.projectName = parseProject.get("projectName");
    this.projectBudget = parseProject.get("projectBudget");
    this.projectExpense = parseProject.get("projectExpense");
    this.projectEndDate = parseProject.get("projectEndDate");
    this.parseProject = parseProject;
  }

  // Getting Project data from DB:
  function getProjects() {
    var async = $q.defer();
    // var activeUserId = userSrv.getActiveUser().id;

    var projects = [];

    const ProjectParse = Parse.Object.extend('Project');
    const query = new Parse.Query(ProjectParse);
    // query.equalTo("userId", Parse.Project.current());
    query.find().then(function (results) {

      for (var i = 0; i < results.length; i++) {
        projects.push(new Project(results[i]));
      }

      async.resolve(projects);

    }, function (error) {
      $log.error('Error while fetching Project', error);
      async.reject(error);
    });

    return async.promise;
  }

    //Loading selected project:
    // function openProject(project) {
    //   $scope.items = [];
    //   projectDetailsSrv.items = [];
    //   projectDetailsSrv.getItems().then(function (items) {
    //     $scope.items = items;
    //   }, function (err) {
    //     $log.error(err);
    //   })
  
    //   for (var i = 0; i < $scope.items.length; i++) {
    //     if (items[i][key] === project.projectId) {
    //       push.items[i];
    //     }
        
    //   }
  
    // }

  // Creating new project:
  function createProject(projectName, projectBudget, projectExpense, projectEndDate) {
    var async = $q.defer();

    const ProjectParse = Parse.Object.extend('Project');
    const newProject = new ProjectParse();

    // newProject.set('projectName', projectId);
    newProject.set('projectName', projectName);
    newProject.set('projectBudget', projectBudget);
    newProject.set('projectExpense', projectExpense);
    newProject.set('projectEndDate', projectEndDate);

    newProject.save().then(
      function (result) {
        $log.info('Project created', result);
        var newProject = new Project(result);
        async.resolve(newProject);
      },
      function (error) {
        $log.error('Error while creating Project: ', error);
        async.reject(error);
      }
    );

    return async.promise;
  }

  // Get project by id:
  function getProjectById(projectName) {
    var async = $q.defer();
    
    getProjects().then(function(projects) {
      async.resolve(projects[projectName]); 
    }, function(err) {
      async.reject(err);
    });
    
    return async.promise;
  } 

  // Deleting project:
  function deleteProject(project) {
    var async = $q.defer();
    
    project.parseProject.destroy().then((response) => {
      console.log('Deleted ParseProject', response);
      async.resolve();
    }, (error) => {
      console.error('Error while deleting ParseProject', error);
      async.reject(error);
    });

    return async.promise;
  }


  // Updating Project Name:
  function updateProjectName(projectName) {
    var async = $q.defer();

    const Project = Parse.Object.extend('Project');
    const query = new Parse.Query(Project);

    query.get('xKue915KBG').then((object) => {
      object.set('projectName', projectName);
      object.save().then((response) => {

        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")

        console.log('Updated ', response);
      }, (error) => {

        console.error('Error while updating ', error);
      });
    });

    return async.promise;
  }

  // Updating projectBudget:
  function updateProjectBudget(project, projectBudgetNew) {
    var async = $q.defer();
    project.parseProject.set("projectBudget", projectBudgetNew);
    console.log('Updated Project');
    async.resolve(projectBudgetNew);
    project.parseProject.save();
    (error) => {
      console.error('Error while updating Project', error);
      async.reject(error);
    };
    return async.promise;
  };




  return {
    projects: projects,
    getProjects: getProjects,
    createProject: createProject,
    getProjectById: getProjectById,
    updateProjectBudget: updateProjectBudget,
    updateProjectName: updateProjectName,
    deleteProject: deleteProject
  }

});
