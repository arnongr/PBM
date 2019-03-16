app.factory("projectsSrv", function ($http, $q, $log) {

  var projects = [];

  // Project constructor
  function Project(parseProject) {
    this.projectName = parseProject.get("projectName");
    this.projectBudget = parseProject.get("projectBudget");
    this.projectEndDate = parseProject.get("projectEndDate");
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
        $log.error('Error while fetching Recipe', error);
        async.reject(error);
      });
  
      return async.promise;
    }



  // Creating new project:
  function createProject(projectName, projectBudget, projectEndDate) {
    var async = $q.defer();

    const ProjectParse = Parse.Object.extend('Project');
    const newProject = new ProjectParse();

    newProject.set('projectName', projectName);
    newProject.set('projectBudget', projectBudget);
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

  // Adding budget
  function projectBudget(projectBudget) {
    var async = $q.defer();

    const BudgetParse = Parse.Object.extend('Budget');
    const projectBudget = new BudgetParse();

    projectBudget.set('projectBudget', projectBudget);

    projectBudget.save().then(
      function (result) {
        $log.info('Budget created', result);
        var newProject = new Budget(result);
        async.resolve(projectBudget);
      },
      function (error) {
        $log.error('Error while creating Project: ', error);
        async.reject(error);
      }
    );

    return async.promise;
  }




  return {
    projects: projects,
    getProjects: getProjects,
    createProject: createProject,
    projectBudget: projectBudget,
    updateProjectName: updateProjectName,
  }

});
