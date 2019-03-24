// app.directive("PieCtrl", function () {
  angular.module("app", ["chart.js"]).controller("PieCtrl", function ($scope) {
    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
    return {
      templateUrl: "app/charts/item-pie-chart.html",
      restrict: "E"
    }
  });

