(function () {

  "use strict";

  angular.module("hospitalApp")

    .factory("surveysFactory", function($http, $q) {
      
      var baseUrl = "http://nxtlife.pythonanywhere.com";

      var getQuestions = function () {
        var deferred = $q.defer();
        $http({
          method: "GET",
          contentType: "application/json",
          url: baseUrl + "/questions"
        }).success(function (response) {
          deferred.resolve(response);
        }).error(function (response) {
          console.log("err", response)
          deferred.reject(response);
        });
        return deferred.promise;
      }

      return {
       getQuestions: getQuestions
      }

    });
})();