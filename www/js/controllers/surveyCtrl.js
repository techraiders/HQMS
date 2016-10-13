(function () {
  "use strict";

  angular
    .module("hospitalApp")
      .controller("surveyCtrl", function($scope, $http) {
        $http.get('http://nxtlife.pythonanywhere.com/surveys/').then(function(response) {
          $scope.surveys = response.data;
        })
      });

})();