angular.module("app", ["chart.js"]).controller("itemsPieChart", function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
  });