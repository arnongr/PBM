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
      
        $http.get("assets/data/projects.json").then(function(res) {
          for (var i = 0; i < res.data.length; i++) {
            projects.push(new Project(res.data[i]));
          }
            async.resolve(projects);     
        }, function(err) {

          console.error(err);
          async.reject(err);
        });
      
      
      return async.promise;
    }
        
   
    
    return {
        projects: projects,
        getProjects: getProjects

    }
    
  });
