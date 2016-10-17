(function () {
  "use strict";

  angular
    .module("hospitalApp")
      .controller("surveyController", function($scope, $http) {
        $http.get('http://nxtlife.pythonanywhere.com/surveys').then(function(response) {
          $scope.surveys = response.data;
        })
      });
})();