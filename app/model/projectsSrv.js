app.factory("projectsSrv", function ($http, $q, $log) {

  var projects = [];

  // Project constructor
  function Project(projectIdOrObject, projectName, projectCountDown, projectBudget, projectExpense) {

    if (typeof projectIdOrObject === "object") {
      this.projectId = projectIdOrObject.projectId;
      this.projectName = projectIdOrObject.projectName;
      this.projectCountDown = projectIdOrObject.projectCountDown;
      this.projectBudget = projectIdOrObject.projectBudget;
      this.projectExpense = projectIdOrObject.projectExpense;
    } else {
      this.projectId = projectIdOrObject;
      this.projectName = projectName;
      this.projectCountDown = projectCountDown;
      this.projectBudget = projectBudget;
      this.projectExpense = projectExpense;
    }
  }

  // Car.prototype.kmPerYear = function() {
  //   var currentYear = new Date().getFullYear();
  //   return this.km / (currentYear - this.year + 1);
  // }


  function getProjects() {
    var async = $q.defer();

    $http.get("assets/data/projects.json").then(function (res) {
      for (var i = 0; i < res.data.length; i++) {
        projects.push(new Project(res.data[i]));
      }
      async.resolve(projects);
    }, function (err) {

      console.error(err);
      async.reject(err);
    });


    return async.promise;
  }

  // Adding new project:
  function newProject(projectName) {
    var async = $q.defer();

    const ProjectParse = Parse.Object.extend('Project');
    const newProject = new ProjectParse();

    newProject.set('projectName', projectName);

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
    newProject: newProject,
    projectBudget: projectBudget,
    updateProjectName: updateProjectName
  }

});
